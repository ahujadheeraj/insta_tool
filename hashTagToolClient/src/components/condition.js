import React, { Component } from 'react';
import { CSVLink, CSVDownload } from "react-csv";

const Condition =(props)=>{
    var arr = props.data
    var final = []
    
    if(arr.length!=0){
        var fil = arr.filter(val=>{
            return val.niche==props.Value;
        })
        fil.map(e=>final.push([e.username]))
            console.log(final)

    }


    if(props.Value){
        return <div>
        <CSVLink data={final}><button className='s6 s7' >Download </button></CSVLink>
        </div>
    }
    else{
        return <div>
        <CSVLink data = {"ab"}><button className='s6 s7'>Download </button></CSVLink>
        </div>

    }
}

export default Condition;