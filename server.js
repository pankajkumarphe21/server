const express=require('express');

const app=express()

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            joke:'You are joke',
            title:'First joke'
        },
        {
            id:2,
            joke:'You are another joke',
            title:'Second joke'
        },
        {
            id:3,
            joke:'haha',
            title:'Third joke'
        }
    ]
    res.send(jokes)
})

app.listen(process.env.PORT || 3000);