//maps are similar to objects - main difference is keys can be anyting in maps.

let map = new Map();

map.set("1",100);
let ajay = {name:"ajay"};
map.set(ajay, 200);
map.set(3,"bro");

//access of values in maps.
let first = map.get("1");
let second = map.get(ajay);

console.log(`${first}, ${second}`);


//iteration over map:
for(let usersKeys of map.keys()){
    console.log(usersKeys);  
}

for(let userValues of map.values()){
    console.log(userValues);
}


//Set : collection if values , every value is unique.

let set = new Set();

set.add(1);
set.add({name:"ajay"});
set.add("hello");

//iteration:
for(let value of set){
    console.log(value);
}

