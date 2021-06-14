import React ,{useState} from "react"
import "./style.css"


export default function OneRepMaxCalc(){

    const [orm,setOrm]=useState(0);
    const [currentWeight,setCurrentWeight]=useState(0);
    const [reps,setReps]=useState(1);
    const [rpe,setRpe]=useState(7);
    const [error,setError]=useState("");

    {/*Need to add validation*/}
    const submitHandler=(event)=>{
        try{
            event.preventDefault();

            setError("")
            const potReps= (10-Number(rpe))+Number(reps)
    
            var ORM=Math.ceil(((potReps* Number(currentWeight))*0.0333)+Number(currentWeight))
            console.log(ORM);
            setOrm(ORM)
        }catch(e){
            setError("An error has occoured please try again")
            console.log(e);
        }

    }

    return (
        <div>
        <form onSubmit={submitHandler}>
            <section>
                <label for="weight">Weight: </label>
                <input type ="number" min="1" max="500" id="weight" name="weight" onChange={(event)=>setCurrentWeight(Number(event.target.value))}></input>
               
            </section>

            {/*Is there not a better way to do this? */}
            <section>
            <label for="reps">Reps:</label>
            <select type ="reps" id="reps" name="reps" onChange={(event)=>setReps(event.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            
            </section>

            <section>
            <label for="rpe">RPE: </label>
            <select type ="rpe" id="rpe" name="rpe" onChange={(event)=>setRpe(event.target.value)}>
                <option value="7">7     </option>
                <option value="7.5">7.5 </option>
                <option value="8">8     </option>
                <option value="8.5">8.5 </option>
                <option value="9">9     </option>
                <option value="9.5">9.5 </option>
                <option value="10">10   </option>

            </select>
            
            </section>
            <section id="button">
            <input type="submit" id="button"value ="Calculate ORM"></input>
            </section>
            <p className="Error message">{error}</p>
            

            
        </form>
        <h2>Your (e)1RM is:{orm}</h2>
        
        
        </div>

    )
}