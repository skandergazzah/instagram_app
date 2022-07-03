const { Server } = require("socket.io");
// {Server} yestakbemlmllll ou yssarbihhhhhhhhhhhhhh 

const io = new Server({
    cors:{
        origin:"http://localhost:3000"     //Yesstakbeeellllllll sockerrrr ballllll mill port 300000
    },
 });

let onlineUsers = [];

const addNewUser= (username, socketId) =>{
  !onlineUsers.some((user)=> user.username===username) //some :fonction "Exist" >> si onlineuser 3andouch u ser heka
  && onlineUsers.push({username,socketId}); //then zid user hedha
};

const removeUser =(socketId)=>{
  onlineUsers = onlineUsers.filter((user) => user.socketId !==socketId); //filter on va filtrer cette array and le reconstruire
}

const getUser =(username) =>{
  return onlineUsers.find((user)=> user.username ===username);
}

io.on("connection", (socket) => {
  // io.emit("First event","test") 
  
  socket.on("newUser",(username)=>{
    addNewUser(username,socket.id)
  });

  socket.on("sendNotification",({senderName,receiverName,type})=>{
      const receiver = getUser(receiverName)
      io.to(receiver.socketId).emit("getNotification",{
        senderName,
        type,
      });
  }
  )

  socket.on("sendText",({senderName,receiverName,text})=>{
    const receiver = getUser(receiverName);
    io.to(receiver.socketId).emit("getText",{
      senderName,
      text,
    })
  })

  socket.on("disconnect",() =>{
    removeUser(socket.id); // not an event we recieve nothing from client side
  })
});

io.listen(5000);