const eventEmiiter = require("events");

const myEmitter = new eventEmiiter();

// Listeners
myEmitter.on("myEvent",(...args)=>{
    console.log("there is a new event",args)
})

const secondCb = (...args) => {
    console.log("there is a new event 2",args)
    console.log("-----------------")

}
myEmitter.on("myEvent",secondCb)

// myEmitter.on("myEvent",(...args)=>{
//     console.log("there is a new event 2",args)
//     console.log("-----------------")
// })

// emit an event
myEmitter.emit("myEvent")
myEmitter.emit("myEvent",1,2)
myEmitter.off("myEvent",secondCb)
myEmitter.emit("myEvent",[1,2,3])