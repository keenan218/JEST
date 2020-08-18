const TimeOut = message => {
    setTimeout(()=>{message("Hello World")}, 5000);
}

// const callback = (msg) =>  {
//     console.log(`${msg} - this is the message that is displayed after 5 seconds`);
// }

// TimeOut(callback)

module.exports = TimeOut; 