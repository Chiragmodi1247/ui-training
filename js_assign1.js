const user = [
  { firstName: "Daniel", lastName: "Díaz", age: 24, likesPizza: true },
  { firstName: "Rose", lastName: "Red", age: 39, likesPizza: false },
  { firstName: "John", lastName: "Doe", age: 45, likesPizza: false },
  { firstName: "Vladimir", lastName: "Vygodsky", age: 27, likesPizza: false },
  { firstName: "Foo", lastName: "Bar", age: 32, likesPizza: true },
  { firstName: "María", lastName: "Delaoh", age: 52, likesPizza: false },
  { firstName: "Haskell", lastName: null, age: 23, likesPizza: true },
  { firstName: "Aman", lastName: null, age: 42, likesPizza: true },
  { firstName: "Amalie", lastName: "Baumann", age: 28, likesPizza: true },
  { firstName: "Rachel", lastName: "Scott", age: 48, likesPizza: true }
];

function isOld(x) {
  return x > 30 ? true : false;
}

function doesLike(x) {
  return x;
}

function print() {
  var ans = [];
  for (let i = 0; i < user.length; i++) {
    if (isOld(user[i].age) && doesLike(user[i].likesPizza)) ans.push(user[i]);
  }
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i].firstName||"" + " " + ans[i].lastName||"");
  }
}

function doThis(){
    console.log("Script loaded")
    x = 5;
    document.getElementById("demo").innerHTML = x;
    var x;
    var fn = too("Abc");
    console.log(fn().greet)
}

function too(name){
    let greet = "Hey "
    
    return function(){
        return greet+name;
    }
}

function clickAlert(){
    alert("Hey you clicked me!!!");
}

function newAlert(){
    var data = document.getElementById('newAlertInput').value;
    alert(data);
}

function printDataXML(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };

    xhr.open("GET", "https://api.github.com/users/Chiragmodi1247", true);
    xhr.send();
}

function printDataFetch(){
    fetch('https://api.github.com/users/Chiragmodi1247')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))
}