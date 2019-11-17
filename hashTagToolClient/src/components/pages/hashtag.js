import React,{Component} from 'react'
import './hashtag.css'

class Hashtag extends Component{
    state = {
        m:this.props.m,
        o:this.props.o,
        r:this.props.r
    }

    componentWillReceiveProps(nextstate){
        console.log(this.state);
        console.log(nextstate);
        this.setState({
            nextstate
        })
        console.log(this.state)
    }



    render(){
        console.log(this.props)
        console.log(this.state)

        
  
        return (
            <div className = "hashtag"> 
                
                    <div className = "colum">
                        <div className = "col-head">
                            Most Used    
                        </div>
                        <div className = "hash-most">
                            {this.props.m}
                        </div>
                    </div>
                    <div className = "colum">
                        <div className = "col-head">
                            Often Used   
                        </div>
                        <div className = "hash-most">
                            {this.props.o}
                        </div>
                    </div>
                    <div className = "colum">
                        <div className = "col-head">
                            Rarely Used  
                        </div>
                        <div className = "hash-most">
                            {this.props.r}
                        </div>
                    </div>
                    

            </div>
            
        )
    }

}

export default Hashtag