import React from 'react'
import OneRepMaxCalc from './content/ORM/oneRepMaxCalc'



export default function ContentDisplay(props){

    const currentTab=props.tab;
    
    switch (currentTab){
        case "1rm calculator":
            return(
                <div className="content-container">
                    <OneRepMaxCalc/>     
                </div>
            )
        default:
            return(currentTab)
    }
    
}