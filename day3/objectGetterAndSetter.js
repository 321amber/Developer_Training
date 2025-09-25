let user = {
    name: "anil",
    age: 23,
    gender: "male",

    get details(){
        return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}`;
    },

    set details(values){
        [this.name, this.age, this.gender] = values; 
    }
};

user.details = ["atul", 24, "female"];

console.log(user);

