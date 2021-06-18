import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import AddIcon from '@material-ui/icons/Add';
import './style.css'


export default function ProgressTracker(props){
    {/*Literally just make a function to create each dataset object add it to the data object */}
    {/*But this is hardcoded for moment to tests */}

    const[benchVal,setbenchVal]=useState(0);
    const[deadVal,setdeadVal]=useState(0);
    const[squathVal,setsquatVal]=useState(0);

    const [graphData,setGraphData]=useState([[65, 70, 75, 80, 85, 90, 100],[100, 105, 110, 110, 120, 140, 150],[100, 110, 115, 110, 120, 125, 120]]);
    const graphCallbackFunction=()=>{   
    }

    const data = {
        labels: "1234567",
        datasets: [{
          label: 'Bench',
          data: graphData[0],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          borderWidth:10,
          tension: 0.5
        },
        {
            label: 'Deadlift',
            data: graphData[1],
            fill: false,
            borderColor: "#88FFBC",
            borderWidth:10,
            tension: 0.5
          },
        {
            label: 'Squat',
            data: graphData[2],
            fill: false,
            borderColor: "#FF8888",
            borderWidth:10,
            tension: 0.5
          },

          
        ]
      };

    

    return(
        <div className ="container">
          <div className="graph-container">
          <Line data={data} className="Graph" style={{width:"100%", height:"75%"}}/>
          </div>
          <div className="SBD"> 
          <form>
          <section>
                <label for="squat">Squat: </label>
                <input type ="number" min="1" max="500" id="weight" name="weight" onChange={(event)=>setsquatVal(event.target.value)}></input>
                <AddIcon></AddIcon>
               
            </section>
            <section>
                <label for="weight">Bench: </label>
                <input type ="number" min="1" max="500" id="weight" name="weight" onChange={(event)=>setbenchVal(event.target.value)}></input>
                <AddIcon></AddIcon>
               
            </section>
            <section>
                <label for="weight">Deadlift: </label>
                <input type ="number" min="1" max="500" id="weight" name="weight" onChange={(event)=>setdeadVal(event.target.value)}></input>
                <AddIcon></AddIcon>

               
            </section>
          </form>
          </div>
          </div>
    )
}