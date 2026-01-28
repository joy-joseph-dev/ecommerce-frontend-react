import React from "react";

function MyChannelVideos(){
    let videos=["React","java","SpringBoot"]

    return (
        <>
        {
            videos.map(video=>{
                return <li>{video}</li>
            })
        }
        </>
    )
}
export default MyChannelVideos;