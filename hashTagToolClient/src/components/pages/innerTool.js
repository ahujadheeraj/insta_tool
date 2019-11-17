import React,{Component} from 'react'
import Hashtag from './hashtag'
import './innerTool.css'


class InnerTool extends Component{
    state = {
        influencer:'',
        most:'',
        often:'',
        rarely:''

    }
    
    componentWillReceiveProps(nextprops){
        console.group(nextprops)
    }


    findhashTagEvent = (event)=>{

        console.log("find hashtag event occured!!!")
        console.log(this.state);
        var infdata = this.props.data.filter((ele)=>{
            return this.props.value == ele[1].category.toLowerCase();
        })
        var hashtag = infdata.map(e=>e[1].hashtag)
        console.log(hashtag)
        
        this.setState({
            influencer:event.target.innerHTML,
            most:hashtag[0],
            often:hashtag[1],
            rarely:hashtag[2]
        })
        /*this.state.influencer = event.target.innerHTML;
        this.state.most = hashtag[0];
        this.state.often = hashtag[1];
        this.state.rarely = hashtag[2];*/
            

        console.log(this.state);

    }

    render(){

        console.log(this.props)
        console.log(this.state)
        var fil = this.props.data.filter((ele)=>{
            return this.props.value == ele[1].category.toLowerCase();
        })
        var influencers = new Set(fil.map(e=>{
            return e[1].influencer;
        }))
        var uniqueInf = [...influencers]
        console.log(uniqueInf);
        var inf_component = uniqueInf.map(ele=>{
            return <div className = "influencer-name" onClick = {this.findhashTagEvent}>
                {ele}
            </div>
        })


        return(
            <div className = "inner-tool">
                <div>
                {inf_component}
                </div>
                <div> 
                <Hashtag m = {this.state.most} o = {this.state.often}  r = {this.state.rarely} />    
                </div>

            </div>

            
        )
    }
}

export default InnerTool;