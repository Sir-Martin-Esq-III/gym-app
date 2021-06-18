import React from 'react'
import OneRepMaxCalc from './content/ORM/oneRepMaxCalc'
import Workout from './content/workout/workout'
import ProgressTracker from './content/ProgTracker/progressTracker';
import Welcome from './content/welcome';



export default function ContentDisplay(props){

    const currentTab=props.tab;

    {/*Remove the content container from this and put it in the parent container */}
    
    switch (currentTab){
        case "1rm calculator":
            return(
                <div className="content-container">
                    <OneRepMaxCalc/>     
                </div>
            )
        case "Todays workout":
            return (
                <div className="content-container">
                    <Workout/>     
                </div>
            )
        case "Progress Tracker":
            return (
                <div className="content-container">
                    <ProgressTracker/>     
                </div>
            )
        default:
            return(<Welcome/>)
    }
    
}