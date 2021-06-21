import React, { useLayoutEffect } from 'react'
import workoutinfo from '../../../workoutinfo.json'
import WorkoutItem from './workoutItem'
import './workout.css'
export default function Workout(props){   

    {/*Just need to create a json object with the different arr for each day */}
    const hardcodedDays=["Monday","Tuesday","Wedneday","Thursday","Friday","Saturday","Sunday"]

    return(
        <ul className="workout">
            {hardcodedDays.map((item)=>
                        <li key={item} >
                            <WorkoutItem day={item}/>
                        </li>
            )}
        </ul>
    )
}