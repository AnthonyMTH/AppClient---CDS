import { useEffect } from 'react';
import { useChats } from '../context/ChatContext';
import { useAuth } from '../context/AuthContext';

function ChatPage() {

    const { chats, getChats } = useChats()
    const { user } = useAuth()

    useEffect(() => {
        getChats(user.id)
        console.log(chats)
    }, [])

  return (
    <div className="bg-slate-200 w-full h-screen">
      {/* Left Side */}
      <div className="flex flex-col gap-4">
        <div className="bg-white h-[calc(100vh-40px)] w-[calc(40vh)] rounded-2xl m-5">
          <h2 className="font-bold text-3xl m-10">Chats</h2>
          <div>
            {chats.map((chat) => (
                <div>
                    
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rigth side */}
      <div className="flex flex-col gap-4"></div>
    </div>
  );
}

export default ChatPage;
