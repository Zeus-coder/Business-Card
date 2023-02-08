import React from "react";

export default function CardInfo(){
    return(
        <div className="card-board-container">
            <div className="card-board">
                <h3 className="card-name">Laura Smith</h3>
                <h2 className="card-role">Frontend Developer</h2>
                <p className="card-website">laurasmith.website</p>
                <div className="button-container">
                    <button type="button" className="email-button"><i class="fa fa-envelope"></i> Email</button>
                    <button type="button" className="linkedin-button"><i class="fa fa-linkedin"></i> LinkedIn</button>
                </div>
                <h2 className="card-about">About</h2>
                    <p className="card-about-desc">
                        I am a frontend developer with a particular interest in making 
                        things simple and automating daily tasks. 
                        I try to keep up with security and best practices, 
                        and am always looking for new things to learn.
                    </p>
                <h2 className="card-about">Interest</h2>
                    <p className="card-about-desc">
                        Food expert. Music scholar. Reader. 
                        Internet fanatic. Bacon buff. Entrepreneur. 
                        Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>


            </div>
        
        </div>
    )
}