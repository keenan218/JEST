export function simpleFunc() {
    return "hello!";
}

export function complexFunc() {
    return "complex!";
}

export async function asyncfunction1(){
    return 1; 
}

export async function iUseAwait(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("Done"),1000);
    });
    let result = await promise; 
}

export function getUsers() {
    return new Promise(async (resolve, reject) => {
        let response = await fetch("https://api.github.com/users");
        let users = await response.json();
        for (let i = 0; i < users.length; i++) {
            console.log(users[i].login);
        }
        if (users.parseJSON() !== null) {
            resolve("Got all the data back");
        }
        reject("Something went wrong!");
    });
}
getUsers();
