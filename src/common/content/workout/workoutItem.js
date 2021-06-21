import React from 'react';
import './workout.css'

function WorkoutItem(props) {
    const hardcodedWorkouts=["Workout1","Workout 2","Workout3","Workout 4"]
    return (
        <div >
            <h2>{props.day}</h2> 
            <ul className="days">
            {hardcodedWorkouts.map((item)=>
                        <li key={item} >
                            <p>{item}</p>
                        </li>
            )}
        </ul>
        </div>
    );
}

export default WorkoutItem;