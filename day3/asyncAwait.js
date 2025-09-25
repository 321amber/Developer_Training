//async is a special keyward, when we put it before any function declaration, the function becomes asynchronous function. 
//await keyward is used to wait for the promise to be completed (resolve or rejected)
//we cannot use await keyward if function is not async.

async function loadJson(url){
    try{
        let response = await fetch(url);
        if(response.ok){
            console.error("response is not ok");
            return;
        }
        let data = response.json();
        console.log(data);    
    }
    catch(error){
        console.log(error.message);
    }
}

let url = 'https://javascript.info/no-such-user.json';
loadJson(url);
