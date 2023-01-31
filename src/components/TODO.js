import "./../App.css";
import React, { useState } from "react";
import Header from "./Header";
export default function(){
    const [todo,setTodo]=useState([])
    
    return(
        <div className="ok">
            <Header/>
            <div className="row">
                <Todo props={setTodo}/>
                <Done props={todo}/>
            </div>
            
        </div>
    );
}

function Todo({props}){
    const [state,setState]=useState([])
    const [done,setdone]=useState([])
    const [input,setInput]=useState("")
    const inputValue = (str)=>{
        setInput(str)
    }
    const save = (str)=>{
        const someState=state
        someState.push(str)
        setState([...someState])
    }
    const remove = (index)=>{
        const someState=state;
        setdone([...done,state[index]])
        props(done)
        someState.splice(index,1)
        setState([...someState])

    }
    return(
        <div className="body">
            <div className="input">
                <input type={"text"} onChange={(onChangeValue)=>{inputValue(onChangeValue.target.value)}}></input>
                <button type="button" onClick={()=>{save(input)}}>Enregistrer</button>
            </div>
            
            <div className="todo">
                <h2>To Do</h2>
                {state.map((data,id)=>(<p><input type={"checkbox"} onChange={()=>{remove(id)}}></input>{data}</p>))}
            </div>
        </div>
        
    )
}

function Done({props}){
    return(
        <div className="done">
                <h2>Done</h2>
            {props.map((value, id)=>(<p>{value}</p>))}
        </div>
    )
}