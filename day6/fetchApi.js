let url = "https://official-joke-api.appspot.com/random_joke"

let data = async ()=> {
    try{
        let response = await fetch(url);
    if(!response.ok){
       return "NO data to show";
    }

    let data = await response.json();
    console.log(data);
    return data;
    }
    catch(error){
        console.log("error while fetching");
    }
}


