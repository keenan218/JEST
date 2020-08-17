'use strict';

const infinitetimergame = callback => {
    console.log("Ready... Go!");
    setTimeout(()=> {
        console.log("Times up - 10 seconds before the next game starts");
        callback && callback();

        //Schedule the next game in 10 seconds
        setTimeout(()=>{
            infinitetimergame(callback);
        },10000);
    },1000);
}

// infinitetimergame(()=>console.log("hi"));

module.exports = infinitetimergame;