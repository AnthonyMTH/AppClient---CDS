const io = require('socket.io')(8800, {
    cors: {
        origin: "http://localhost:5173"
    }
})

let activeUsers = []

io.on('connection', (socket) => {
    socket.on('new-user-add', (newUserId) => {
        if (!activeUsers.some((user) => user.userId === newUserId)) {
            activeUsers.push({
                userId: newUserId,
                socketId: socket.id
            })
        }
        console.log('connected', activeUsers)
        io.emit('get-users', activeUsers)
    })

    //send message
    socket.on('send-message', (data) => {
        const {receiverId} = data
        const user = activeUsers.find((user) => user.userId === receiverId)
        console.log('sending from socket')
        console.log("data", data)
        
        if (user) {
            io.to(user.socketId).emit('receive-message', data)
        }
    })

    socket.on('disconnect', () => {
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id)
        console.log('disconnected', activeUsers)
        io.emit('get-users', activeUsers)
    })
})