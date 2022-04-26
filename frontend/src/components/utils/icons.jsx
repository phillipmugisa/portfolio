import React from 'react';

import {
    SiMysql, SiPostgresql, SiDjango,
    SiFlask, SiFlutter, SiGithub,
    SiNginx, SiFigma, SiLinux,
    SiHtml5, SiCss3, SiReact,
    SiJavascript, SiPython
} from "react-icons/si";

import { FaShareAlt, FaHeart, FaComment } from "react-icons/fa";

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
    Comment : <FaComment />
}

export default icons;