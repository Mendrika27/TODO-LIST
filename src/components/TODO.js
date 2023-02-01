import "./../App.css";
import React, { useState } from "react";
import Header from "./Header";
export default function(){
    const [state,setState]=useState([])
    const [done,setdone]=useState([])
    return(
        <div className="ok">
            <Header/>
            <div className="row">
                <Todo state={state} setState={setState} done={done} setdone={setdone}/>
                <Done done={done} />
            </div>
            
        </div>
    );
}

function Todo({state, setState, done, setdone}){
    
    const [input,setInput]=useState("")
    const inputValue = (str)=>{
        setInput(str)
    }
    const save = (str)=>{
        setState((e)=>[...e,str]);
    }
    const remove = (e,index)=>{
        e.preventDefault();
        const someState=state;
        setdone([...done,state[index]])
        setState(done)
        someState.splice(index,1)
        setState([...someState])

    }
    return(
        <div className="body">
            <div className="input">
                <input type={"text"} onChange={(onChangeValue)=>{inputValue(onChangeValue.target.value)}} onKeyDown={(e)=> e.key === "Enter" && save(input)}></input>
              
            </div>
            
            <div className="todo">
                <h2>To Do</h2>
                {state.map((data,id)=>(<li key={id}><input type={"checkbox"} onClick={(e)=>{remove(e,id)}}></input>{data}</li>))}
            </div>
        </div>
        
    )
}

function Done({done}){
    return(
        <div className="done">
                <h2>Done</h2>
            {done.map((value, id)=>(<li key={id}>{value}</li>))}
        </div>
    )
}