import { useEffect, useState } from "react";
import { getUserRequest } from "../api/user";
import { useMessages } from "../context/MessageContext";

function ChatBox({ chat, currentUserId }) {
  const [userData, setUserData] = useState(null);
  const { messages, getMessages } = useMessages();

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

  return (
    <>
      <div>
        <>
          <div className="mx-10 my-2 hover:bg-slate-200 w-full rounded-xl p-4 m-10">
            <div className="flex">
              {/* foto de usuario */}
              <div className="flex flex-col">
                <span className="font-bold">{userData?.username}</span>
                <span>Online</span>
              </div>
            </div>
          </div>
          <hr className="border-t-0.1 border-gray-300" />

          {/* ChatBox messages */}
          <div></div>
        </>
      </div>
    </>
  );
}

export default ChatBox;
