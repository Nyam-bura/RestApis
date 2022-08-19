// const fetch = (...args) => import('node-fetch').then(({default:fetch})=> fetch(...args));
const { get } = require("http://jsonplaceholder.typicode.com/posts");
let fetch = require("node-fetch")

get('https://jsonplaceholder.typicode.com/posts',{
    methods:"GET",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        userId:1,
        title:"GreenKiosk",
        body:"Welcome to green kiosk"
})
})
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log('success', data);
})
.catch(function (error) {
console.log('error', error);
})