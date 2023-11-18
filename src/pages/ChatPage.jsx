import { useEffect, useState } from "react";
import { useChats } from "../context/ChatContext";
import { useAuth } from "../context/AuthContext";
import Conversation from "../components/Conversation";
import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";

function ChatPage() {
  const { chats, getChats } = useChats();
  const { user } = useAuth();
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    getChats(user.id);
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="bg-slate-200 w-1/4 h-screen">
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <div className="bg-white h-[calc(100vh-40px)] w-[calc(35vh)] rounded-2xl m-5">
              <h2 className="font-bold text-3xl m-10">Chats</h2>
              <div>
                {chats.map((chat) => (
                  <div onClick={() => setCurrentChat(chat)}>
                    <Conversation data={chat} currentUserId={user._id} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Rigth side */}
        </div>
        {/* chat body */}
        <div>
          <ChatBox chat={currentChat} currentUser={user._id} />
        </div>
      </div>
    </>
  );
}

export default ChatPage;
