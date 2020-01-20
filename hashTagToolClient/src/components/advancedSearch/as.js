import React,{Component} from 'react'
import './as.css'
import Result from './result'

class Adv extends Component{

    constructor(){
        super()
        this.state = {
            result:false

        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e)=>{
        this.setState({
            result:true
        })
    }

    render(){
        return (
            <div className = "adv">
                <div style = {{textAlign:"center",marginTop:"30px"}}>
                    <h4 style ={{fontWeight:"800"}}>Discover Top Influencers</h4>
                    <h6>Use advanced search to refine search for influencers in Instagram</h6>
                </div>
                <div className = "searchBox">
                    <span className = "searchField">
                        <input type = "text" placeholder = "Enter a category to get started"/>
                        <select>
                            <option>Followers</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <select>
                            <option>Country</option>
                            <option>India</option>
                            <option>America</option>
                            <option>Australia</option>
                            <option>Italy</option>
                        </select>                        
                        <select>
                            <option>Language</option>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Spanish</option>
                            <option>German</option>
                        </select>
                        <button onClick = {this.handleClick} >Find Influencers</button>
                        </span>
                </div>
                {this.state.result?<Result/>:null}
            </div>
        )
    }

}

export default Adv;