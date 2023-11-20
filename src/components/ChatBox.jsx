import { useEffect, useRef, useState } from "react";
import { getUserRequest } from "../api/user";
import { useMessages } from "../context/MessageContext";
import {format} from 'timeago.js'
import InputEmoji from 'react-input-emoji'

function ChatBox({ chat, currentUserId, setSendMessage, receiveMessage }) {
  const [userData, setUserData] = useState(null);
  const { messages, getMessages, addMessage, setMessages } = useMessages();
  const [ newMessage, setNewMessage ] = useState("")
  const scroll = useRef()

  useEffect(() => {
    console.log('chatbox', userData)
  }, [])

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
      setMessages([...messages, receiveMessage])
    }
  }, [receiveMessage])

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUserId);

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
    console.log(userData)
  }, chat);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage)
  }

  const handleSend = (e) => {
    e.preventDefault()
    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: chat._id
    }
    addMessage(message)

    /* Enviar mensaje a socket */
    const receiverId = chat.members.find((id) => id !== currentUserId)
    setSendMessage({...message, receiverId})
  }

  // scroll hacia el último mensaje
  useEffect(() => {
    scroll.current?.scrollIntoView({behavior: 'smooth'})
  }, [messages])

  return (
    <>
      <div className="grid rounded-2xl grid-rows-[14vh,65vh,10vh] bg-white mt-5">
        {chat? (
        <>
        <div> 
          <div className="mx-10 my-2 hover:bg-slate-200 w-1/5 rounded-xl p-4">
            <div className="flex">
              {/* foto de usuario */}
              <div className="flex flex-col">
                <span className="font-bold">{userData?.username}</span>
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
                <div ref={scroll} className="flex flex-col">
                    <div className={message.senderId === currentUserId
                    ? "bg-blue-300 p-2 rounded-md rounded-br-none text-white w-fit self-end": 
                    "bg-green-300 p-2 rounded-md rounded-bl-none text-white w-fit"}>
                        <p>{message.text}</p> 
                        <span className="text-xs">{format(message.createdAt)}</span>
                    </div>
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
                <div className="p-2 m-1 bg-green-600 rounded-md h-[4vh] font-bold hover:bg-green-400 hover:cursor-pointer"
                onClick={handleSend}>
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