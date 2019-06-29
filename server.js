//before using express

const http=require("http");
const user={
		name:"ram",
		passw:123,
		dep:"mca"
	}
const server=http.createServer((request,response)=>{
	console.log("hi this is user  request");
	console.log("url",request.url);
	
	response.setHeader("content-type",'application/json');
	response.end(JSON.stringify(user));

})
server.listen(3001);

//using expressjs
// const express=require('express')
// const app=express();
// app.get('/',(req,res)=>{res.send("<h1>hello world</h1>")})
// app.get('/login',(req,res)=>{res.send("<h1>Login Page</h1>")})
// 
//-->middlevare
// const express=require('express')
//  const app=express();
//  const bodyparser=require('body-parser');
//  app.use((req,res,next)=>{
// 	console.log("<h1>Hello</h1>")
// 	next();
// })
// app.use(bodyparser.urlencoded({extended:false}));
// app.use(bodyparser.json());

// app.use((req,res,next)=>
// {
// 	console.log("success.....")
// 	next();
// })
// app.post('/profile',(req,res)=>{
// 	console.log(req.body);
// 	const user={
// 		name:'vignesh',
// 		dep:'mca'
// 	}
// 	res.send(user);
// })

// app.get('/',(req,res)=>{
// 	// console.log(req.query);
// console.log(req.body);	
// 	res.send("getting root");
// })
//-->upto middle ware
// const express=require('express')
// const app=express();
// app.get('/',(req,res)=>{res.send("<h1>hello world</h1>")})
// app.get('/login',(req,res)=>{res.send("<h1>Login Page</h1>")})
// app.get('/user',(req,res)=>{res.send("<h1>user Page</h1>")})
//<---restfulAPI-->
// app.use(bodyparser.urlencoded({extended:false}));
// app.use(bodyparser.json());

// app.use((req,res,next)=>
// {
// 	console.log("success.....")
// 	next();
// })
// app.get('/', (req,res)=>{
// 	// console.log(req.query);
// 	// console.log(req.body);
// 	console.log(req.headers);
// 	// console.log(req.params)
// 	res.send("<h1>json value</h1>")

// })
// //<--uptorestful-->

// app.listen(3001);