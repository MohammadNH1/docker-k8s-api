const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    return res.status(200).json({message:'Hello From Docker and Kubernetes!'})
})


app.listen(3001,()=>{
    console.log('server listen on port 3001')
})