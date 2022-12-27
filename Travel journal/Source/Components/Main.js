import React from "react"

export default function(props){
    return(
        <div id="Main">
                <img src = {props.imageUrl} id="cover"/>
                <div id="text">
                    <div id="location">
                        <img src="../Images/location.png" />
                        <p>{props.location}</p>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <div id="context">
                        <h2>{props.title}</h2>
                        <p id="date">{props.startDate} - {props.endDate}</p>
                            
                        <p id="discription">{props.description}</p>
                    </div>
                </div>
        </div>
    )
}