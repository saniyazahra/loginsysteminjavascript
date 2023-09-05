var objUser=[
    {
    username:"sania",
    password:"7788"
    },
    {
        username:"ahsan",
        password:"1122"
    },
]
function getInfo(){
    const username = document.getElementById("username").Value;
    const password = document.getElementById("password").value;
    for(i=0; i<objUser.length; i++){
        if(username == objUser[i].username && password == objUser[i].password){
        console.log(username + "is logged in");
        return//break the loop//
    }
} 
console.log("incorrect username or password");
}
