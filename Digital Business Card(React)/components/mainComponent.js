import React from "react"

export default function Main(){
    return(
        <>
            <div id="Main">
                <div>
                <h1 id = "name" >Abinesh</h1>
                <p  id = "field">AI Engineer</p>
                <p  id = "web"  >Abhi.website.in</p>
                </div>
                <div id="buttons">
                    <button id="Email">
                    <img src="./Images/email.png" id="ELbut"/> Email
                    </button>
                    <button id="LinkedIn">
                    <img src="./Images/linkedin.png" id="ELbut"/> LinkedIn
                    </button>
                </div>
                <div>
                    <h2 className="Topic">About</h2>
                    <p className="Context">I'm an AI engineer with particular interest in Machine Learning.I also learned Front end Development in-order to deploy an ML model in it.Made this business card for practice, don't mind the details</p>
                    
                    <h2 className="Topic">Interests</h2>
                    <p className="Context">My interest Keeps on varying , now its on Front-end for some reason so tryna learn it.Learning it inorder to develop an android app using react native. </p>
                </div>
            </div>
            
        </>
    )
}