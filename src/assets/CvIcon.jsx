import React, { useState } from "react";


function CvIcon({ hpx, wpx}){
    const [hover,setHover] = useState(false)
    return (
        <a  className='hover:cursor-pointer' href="https://drive.google.com/file/d/1etuibr8vx22sh4Y0Ij8nP4FikGG2X911/view?usp=share_link" target={"_blank"}   onMouseEnter={()=>setHover(!hover)} onMouseLeave={()=>setHover(!hover)}>
            <svg fill={hover ? "#FFE5E5": "#ffff"} height={hpx} width={wpx} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M422.957,0H89.044c-9.22,0-16.696,7.475-16.696,16.696v478.609c0,9.22,7.475,16.696,16.696,16.696h333.913 c9.22,0,16.696-7.475,16.696-16.696V16.696C439.652,7.475,432.177,0,422.957,0z M256,75.522c36.507,0,66.206,29.7,66.206,66.206 c0,36.119-29.332,66.206-66.206,66.206c-36.738,0-66.206-29.934-66.206-66.206C189.794,105.223,219.493,75.522,256,75.522z M331.034,436.478H180.966c-9.22,0-16.696-7.475-16.696-16.696c0-9.22,7.475-16.696,16.696-16.696h150.067 c9.22,0,16.696,7.475,16.696,16.696C347.729,429.003,340.254,436.478,331.034,436.478z M331.034,366.904H180.966 c-9.22,0-16.696-7.475-16.696-16.696s7.475-16.696,16.696-16.696h150.067c9.22,0,16.696,7.475,16.696,16.696 S340.254,366.904,331.034,366.904z M331.034,297.328H180.966c-12.847,0-20.871-13.938-14.458-25.043l29.489-51.075 c35.361,26.765,84.468,26.9,120.002-0.01l29.495,51.085C351.914,283.408,343.861,297.328,331.034,297.328z"></path> </g> </g> </g></svg>
        </a>
    )
};

export default CvIcon