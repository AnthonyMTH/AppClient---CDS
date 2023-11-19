import { useEffect, useRef, useState } from "react";
import { useChats } from "../context/ChatContext";
import { useAuth } from "../context/AuthContext";
import Conversation from "../components/Conversation";
import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";
import {io} from 'socket.io-client'

function ChatPage() {
  const { chats, getChats } = useChats();
  const { user } = useAuth();

  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([])
  const [sendMessage, setSendMessage] = useState(null)
  const [receiveMessage, setReceiveMessage] = useState(null)

  const socket = useRef()

  // enviar mensaje a socket
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit('send-message', sendMessage)
    }
  }, [sendMessage])

  useEffect(() => {
    socket.current = io('http://localhost:8800')
    socket.current.emit('new-user-add', user.id)
    socket.current.on('get-users', (users) => {
      setOnlineUsers(users)
    })
  }, [user])

  // recibir mensaje de socket
  useEffect(() => {
    socket.current.on('receive-message', (data) => {
      console.log('data received in Chat.jsx', data)
      setReceiveMessage(data)
    })
  }, [])

  useEffect(() => {
    getChats(user.id);
    console.log(user)
  }, []);

  return (
    <>
    <div className="flex flex-col">
      <NavBar />
      <div className="flex items-center h-screen">
        <div className="bg-slate-200 w-1/4 h-screen">
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <div className="bg-white h-[calc(87vh)] w-[calc(35vh)] rounded-2xl m-5">
              <h2 className="font-bold text-3xl m-10">Chats</h2>
              <div>
                {chats.map((chat) => (
                  <div onClick={() => setCurrentChat(chat)}>
                    <Conversation data={chat} currentUserId={user.id} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Rigth side */}
        </div>
        {/* chat body */}
        <div className="w-3/4 bg-slate-200 h-screen">
          <ChatBox chat={currentChat} currentUserId={user.id} setSendMessage={setSendMessage} receiveMessage={receiveMessage}/>
        </div>
      </div>
      </div>
    </>
  );
}

export default ChatPage;
