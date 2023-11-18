import { createContext, useContext, useState } from "react";
import { getChatsRequest } from "../api/chats";

export const ChatContext = createContext()

export const useChats = () => {
    const context = useContext(ChatContext)

    if (!context) {
        throw new Error('UsePosts must be used within a PostProvider')
    }

    return context
}

export const ChatProvider = ({children}) => {
    const [chats, setChats] = useState([])

    const getChats = async (id) => {
        try {
            const res = await getChatsRequest(id)
            setChats(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ChatContext.Provider value={{
            chats,
            getChats
        }}>
        {children}
        </ChatContext.Provider>
    )
}