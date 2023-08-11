
const express=require("express");
const app=express();
const PORT=3000;
app.use(express.json());

const namelist=[
    {
        name:"Giri Prasath",
        dept:"Computer Science And Engineering",
        sec:1,
        year:"3rd year",
        Rollno:71762105017
    },
    {
        name:"Ajay Krishana",
        dept:"Computer Science And Engineering",
        sec:1,
        year:"3rd year",
        Rollno:71762105003
    },
    {
        name:"Hanush",
        dept:"Computer Science And Engineering",
        sec:1,
        year:"3rd year",
        Rollno:71762105022
    }

]

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}....`);
})


app.get("/",(request,response)=>
{
    response.send("Welcome user....");
})

app.get("/names",(request,response)=>
{
    response.send(namelist);
})

app.post("/names",(request,response)=>
{
   // console.log(request.body);
    namelist.push(request.body);
    response.send(namelist);
})