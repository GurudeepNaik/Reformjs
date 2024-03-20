import { NAME } from "@repo/common/config";
import { UTILS } from "@repo/utils/config";
import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.json({
        message: NAME + UTILS
    });
})

app.listen(8080,()=>{
    console.log("Server listning @8080");
    
})