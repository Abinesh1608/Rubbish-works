import React from "react"
import Nav from "./Components/Nav"
import Main from "./Components/Main"
import Data from "./data"
export default function App(){
    console.log(Data)
    let places =Data.map(place=>{
        return(
            <Main 
            {...place}
            />
        )
    })
    return(
        <div>
            <Nav />
            <section id="format">
                {places}
            </section>
        </div>
    )
}