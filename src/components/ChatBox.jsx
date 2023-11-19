import { useEffect, useState } from "react";
import { getUserRequest } from "../api/user";
import { useMessages } from "../context/MessageContext";
import {format} from 'timeago.js'
import InputEmoji from 'react-input-emoji'
import {io} from 'socket.io-client'

function ChatBox({ chat, currentUserId }) {
  const [userData, setUserData] = useState(null);
  const { messages, getMessages } = useMessages();
  const [ newMessage, setNewMessage ] = useState("")

  useEffect(() => {
    const userId = chat?.members?.find(
      (id) => id !== currentUserId /* usuario con el que queremos chatear */
    );

    const getUserData = async () => {
      try {
        const { data } = await getUserRequest(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUserId]);

  useEffect(() => {
    if (chat !== null) {
      getMessages(chat._id);
    }
  }, chat);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage)
  }

  return (
    <>
      <div className="grid rounded-2xl grid-rows-[14vh,63vh,10vh] bg-white mt-5">
        {chat? (
        <>
        <div>
          <div className="mx-10 my-2 hover:bg-slate-200 w-1/5 rounded-xl p-4">
            <div className="flex">
              {/* foto de usuario */}
              <div className="flex flex-col">
                <span className="font-bold">{userData?.username}</span>
                <span>Online</span>
              </div>
            </div>
          </div>
          <hr className="border-t-0.1 border-gray-300" />
          </div>

          {/* ChatBox messages */}
          {/* Body */}
          <div className="flex flex-col gap-2 p-6 overflow-scroll">
            {messages.map((message) => (
                <>
                    <div className={message.senderId === currentUserId? "bg-green-300 p-2 rounded-md text-white flex flex-col w-fit": "bg-blue-300 p-2 rounded-md text-white flex flex-col w-fit self-end"}>
                        <span>{message.text}</span> 
                        <span className="text-xs">{format(message.createdAt)}</span>
                    </div>
                </>
            ))}
          </div>

              {/* sender */}
              <div className="flex items-center">
                <div>+</div>
                <InputEmoji 
                value = {newMessage}
                onChange={handleChange}
                />
                <div className="p-2 m-1 bg-green-600 rounded-md h-[4vh] font-bold hover:bg-green-400 hover:cursor-pointer">
                  Send
                </div>
              </div>
        </>
        ): (
          <span className="self-center font-bold text-center">Tap on a chat to start conversation!</span>
        )}
      </div>
    </>
  );
}

export default ChatBox;
