import React from 'react'
import OneRepMaxCalc from './content/ORM/oneRepMaxCalc'
import Workout from './content/ORM/workout'
import ProgressTracker from './content/ORM/progressTracker';
import News from './content/ORM/news';
import Welcome from './content/ORM/welcome';



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
        case "News":
            return (
                <div className="content-container">
                    <News/>     
                </div>
            )
        default:
            return(<Welcome/>)
    }
    
}