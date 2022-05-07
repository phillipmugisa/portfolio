import React from 'react';

// simple icons
import {
    SiMysql, SiPostgresql, SiDjango,
    SiFlask, SiFlutter, SiGithub,
    SiNginx, SiFigma, SiLinux,
    SiHtml5, SiCss3, SiReact,
    SiJavascript, SiPython
} from "react-icons/si";

// font awesome
import { FaShareAlt, FaHeart, FaComment, FaEllipsisH } from "react-icons/fa";

// material design
import { MdOutlineErrorOutline } from "react-icons/md";

const icons = {
    
    MySql : <SiMysql />, 
    Postgresql : <SiPostgresql />, 
    Django : <SiDjango />,
    
    Flask : <SiFlask />, 
    Flutter : <SiFlutter />, 
    Github : <SiGithub />,
    
    Nginx : <SiNginx />, 
    Figma : <SiFigma />, 
    Linux : <SiLinux />,
    
    Html5 : <SiHtml5 />, 
    Css3 : <SiCss3 />, 
    React : <SiReact />,
    
    Javascript : <SiJavascript />, 
    Python : <SiPython />,

    
    Share : <FaShareAlt />,
    Heart : <FaHeart />,
    Comment : <FaComment />,
    Options : <FaEllipsisH />,

    Error: <MdOutlineErrorOutline />
}

export default icons;