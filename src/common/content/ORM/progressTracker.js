import React from 'react'
import { Line } from 'react-chartjs-2';

export default function ProgressTracker(props){
    {/*Literally just make a function to create each dataset object add it to the data object */}
    {/*But this is hardcoded for moment to tests */}
    const data = {
        labels: "1234567",
        datasets: [{
          label: 'Bench',
          data: [65, 70, 75, 80, 85, 90, 100],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          borderWidth:10,
          tension: 0.1
        },
        {
            label: 'Deadlift',
            data: [100, 105, 110, 110, 120, 140, 150],
            fill: true,
            borderColor: "#88FFBC",
            borderWidth:10,
            tension: 0.5
          },
        {
            label: 'Squat',
            data: [100, 110, 115, 110, 120, 125, 120],
            fill: false,
            borderColor: "#FF8888",
            borderWidth:10,
            tension: 0.1
          },

          
        ]
      };

    

    return(
        <div>
        <Line data={data} className="Graph" style={{width:"100%"}}/>
        <h1>This is the Progress Tracker display component, clearly it isnt here yet</h1>
        </div>
    )
}