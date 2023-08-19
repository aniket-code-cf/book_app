import {  Button, } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div class="container-fluid main_header">
        <div class="row">
            <div class="col-md-10 col-12 mx-auto">

                
              <div class="row">
                
                <div class="col-md-6 col-12 main_header_right align-items-center">
                    <figure class="myPic">
                        <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.2.1243001960.1640875092" alt="Bro" class="img-fluid" title="Bro's Report"/>
                    </figure>
                </div>

                 

                <div class="col-md-6 col-12 main_header_left">
                    <p   sx={{ marginTop: 15, background: "orangered" }}>Welcome! to my Book Store app</p>
                    <h1>I am Aniket, <span class="text_clr">ECE</span> student at NIT Jamshedpur.</h1>
                    <a href="https://www.linkedin.com/in/aniket-kumar-4bba16246/" target="_Bro"><Button  sx={{ marginTop: 2, background: "orangered" }} >About Me</Button></a>
                </div>
                
            </div>   

            </div>   
        </div>
    </div> 
    
   
    
  );
};

export default About;
