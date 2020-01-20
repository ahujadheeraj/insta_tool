import React,{Component} from 'react'
import './hashtag.css'
// import { MdBluetooth } from 'react-icons/md';

class Hashtag extends Component{
    state = {
        m:this.props.m,
        o:this.props.o,
        r:this.props.r,
        m_color:'#428bca',
        m_copied:'copy to clipboard',
        o_color:'#428bca',
        o_copied:'copy to clipboard',
        r_color:'#428bca',
        r_copied:'copy to clipboard'
    }

    componentWillReceiveProps(nextstate){
        console.log(this.state);
        console.log(nextstate);
        this.setState(nextstate)
        
        console.log(this.state)
    }

    componentWillUnmount(){
        console.log("hashtag component updated")
        console.log(this.state);
    }



    render(){
        console.log(this.props)
        console.log("state from hashtag")
        console.log(this.state)

        
  
        return (
            <div className = "hashtag"> 
                
                    <div className = "colum">
                        <div className = "col-head">
                            Most Used    
                        </div>
                        <div className = "hash-most" >
                            {this.state.m}
                        </div>
                        <button className = "copy-btn" style = {{backgroundColor:this.state.m_color}} onClick={() => {
                                const textField = document.createElement('textarea');
                                textField.innerText = this.state.m;
                                document.body.appendChild(textField);
                                textField.select();
                                document.execCommand('copy');
                                textField.remove();
                            this.setState({
                                ...this.state,
                                m_color:'#3cd43c',
                                m_copied:'copied',
                                o_color:'#428bca',
                                o_copied:'copy to clipboard',
                                r_color:'#428bca',
                                r_copied:'copy to clipboard'
                            })
                        }}>{this.state.m_copied}</button>

                    </div>
                    <div className = "colum">
                        <div className = "col-head">
                            Often Used   
                        </div>
                        <div className = "hash-most">
                            {this.state.o}
                        </div>
                        <button className = "copy-btn"  style = {{backgroundColor:this.state.o_color}} onClick={() => {
                                const textField = document.createElement('textarea');
                                textField.innerText = this.state.o;
                                document.body.appendChild(textField);
                                textField.select();
                                document.execCommand('copy');
                                textField.remove();
                            this.setState({
                                ...this.state,
                                m_color:'#428bca',
                                m_copied:'copy to clipboard',
                                o_color:'#3cd43c',
                                o_copied:'copied',
                                r_color:'#428bca',
                                r_copied:'copy to clipboard'
                            })}}>{this.state.o_copied}</button>

                    </div>
                    <div className = "colum">
                        <div className = "col-head">
                            Rarely Used  
                        </div>
                        <div className = "hash-most" >
                            {this.state.r}
                        </div>
                        <button className = "copy-btn" style = {{backgroundColor:this.state.r_color}} onClick={() => {
                                const textField = document.createElement('textarea');
                                textField.innerText = this.state.r;
                                document.body.appendChild(textField);
                                textField.select();
                                document.execCommand('copy');
                                textField.remove();
                            this.setState({
                                ...this.state,
                                m_color:'#428bca',
                                m_copied:'copy to clipboard',
                                o_color:'#428bca',
                                o_copied:'copy to clipboard',
                                r_color:'#3cd43c',
                                r_copied:'copied'
                            })}}>{this.state.r_copied}</button>

                    </div>
                    

            </div>
            
        )
    }

}

export default Hashtag