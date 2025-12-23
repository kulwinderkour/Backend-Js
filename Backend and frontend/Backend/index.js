import express from 'express';
const app = express();
 
app.get('/',(req,res) =>{
    res.send("server is ready")
});


app.get('/api/jokes',(req,res) =>{
    const jokes=[
        {
            id:1,
            title:'A Joke',
            content:'this is first joke'
        },
        {
            id:2,
            title:'2nd joke',
            content:'this is another joke'
        },
        {
            id:3,
            title:'3rd joke',
            content:'this is third joke'
        },
        {
            id:4,
            title:'4th joke',
            content:'this is fourth joke'
        },
        {
            id:5,
            title:'5th joke',
            content:'this is last joke'
        }

    ];
    res.send(jokes);
})




const port =  process.env.PORT || 4000;

app.listen(port ,(req,res) =>{
    console.log(`app is running on port ${port}`)
});