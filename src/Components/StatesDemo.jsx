import React from "react";
import { useState,useEffect } from "react";

function StatesDemo(){
    const[videoName,setVideoName]= useState("React");
    const[videoLikes,setVideoLikes]=useState(0);
    
    useEffect(()=>{
        console.log("component rendered")
    },[])

    useEffect(()=>{
        console.log("Video Likes Updated")
    },[])
    return (
        <>
        <h4>video Name :{videoName}</h4>
        <h4>video Likes :{videoLikes}</h4>
        <button onClick={()=>{setVideoLikes(videoLikes+1)}}>LIKE</button>
        <button onClick={()=>{setVideoLikes(videoLikes-1)}}>DISLIKE</button>
        
        </>
    )
}
export default StatesDemo;