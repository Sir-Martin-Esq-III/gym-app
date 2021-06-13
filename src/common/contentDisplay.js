import React from 'react'
import OneRepMaxCalc from './content/ORM/oneRepMaxCalc'



export default function ContentDisplay(props){

    const currentTab=props.tab;
    {/* maybe make this a switch statement */}

    if (currentTab=="1rm calculator"){
        return(
            <div className="content-container">
            <OneRepMaxCalc/>     
            </div>

        )
    }else{
        return(
        <div className="content-container">
            nothing here
        </div>
        )
    }
    
}