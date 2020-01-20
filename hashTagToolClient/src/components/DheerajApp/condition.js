import React, { Component } from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import './condition.css'

class Condition extends Component{
    state={
        show:false,
        color:'#428bca',
        copied:'copy',
        randomArr:[]
    };
    
    clickHandler = ()=>{   
        this.setState({
                ...this.state,
                show:true

        })
    }

    componentWillUnmount(){
        this.setState({
            show:false,
            color:'#428bca',
            copied:'copy',
            randomArr : []
        })

    }

    render(){

        let arr = this.props.data;
        console.log(this.props)
        var final = []
        var random = []
    
        
        if(arr.length!=0){
            var fil = arr.filter(val=>{
                return val.Niche==this.props.Value;
            });
            fil.map(e=>final.push([e.username]));
                console.log(final)
                var size = final.length;  
            
           
        }

        var a = (Math.round((Math.random()*100)%10)+1);
        var d = (Math.round((Math.random()*100)%2)+1);

        for(var i = 0;i<=49;i++){
            var index = a + i*d;
            random.push((final[index%size]))
        }
        console.log(random);

        var count = 1;
    


            
        return<div className = "condition-outer">
            <div>
                <button className='s6 s7' style = {{marginTop:'70px'}} onClick = {this.clickHandler}>Find Follow-backs </button>
            </div>
            
            <div className = "box">
                Possible Follow Backs
                <div className = "random">
                    {this.state.show && random.map(e=>
                    <div>{count++} - {e}</div>)
                    }
                    
                    
                </div>

                <button className = "copy-btn-2" style = {{backgroundColor:this.state.color}} onClick={(e) => {
                                const CtextField = document.createElement('textarea');
                                CtextField.innerText = random;
                                document.body.appendChild(CtextField);
                                CtextField.select();
                                document.execCommand('copy');
                                CtextField.remove();
                                alert("Possible Follow Backs Copied!!!")
                                /*this.state.color = '#3cd43c';
                                this.state.copied = 'copied';
                                
                                this.setState({
                                ...this.state,
                                color:'#3cd43c',
                                copied:'copied',
                               
                            });
                            e.preventDefault();*/
                        }}>{this.state.copied}</button>

            </div>
            
        </div>
    }
    

}

export default Condition;