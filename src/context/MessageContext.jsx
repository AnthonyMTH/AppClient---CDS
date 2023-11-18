import { createContext, useContext, useState } from "react";
import { getMessagesRequest } from "../api/message";

export const MessageContext = createContext()

export const useMessages = () => {
    const context = useContext(MessageContext)

    if (!context) {
        throw new Error('UsePosts must be used within a PostProvider')
    }

    return context
}

export const MessageProvider = ({children}) => {
    const [messages, setMessages] = useState([])

    const getMessages = async (id) => {
        try {
            const res = await getMessagesRequest(id)
            setMessages(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MessageContext.Provider value={{
            messages,
            getMessages,
        }}>
        {children}
        </MessageContext.Provider>
    )
}