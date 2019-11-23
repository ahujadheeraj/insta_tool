import React, { Component } from 'react';
import './tools.css'
import axios from 'axios';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Autosuggest from 'react-autosuggest';
import InnerTool from './innerTool'
import Bounce from 'react-reveal/Bounce';
import {Helmet} from "react-helmet";



const Niche = [
  {
    name: 'Jeans',

  },
  {
    name: 'Leather_Jacket',

  },
  {
    name: 'Leather_Pants',

  },
  {
    name: 'Leather_Clothing',

  },
  {
    name: 'Mens_and_Boys_Hats',

  },
  {
    name: 'Mens_Suits',

  },
  {
    name: 'Neckwear',

  },
  {
    name: 'Pants',

  },
  {
    name: 'Shirts',

  },
  {
    name: 'Surplus_and_Salvage_Merchandise',

  },


];


const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : Niche.filter(niche =>
    niche.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};
var tool_data = {}
var mytool_data = []

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div className='c1 shadow'>
   {suggestion.name}
  </div>
);



class Tools extends Component {

 state = {
   data: [],
   value: '',
   suggestions: []
 }


 onChange = (event, { newValue }) => {
   this.setState({
     value: newValue
   });
 };

 onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  buttonClickEvent = (event)=>{
    this.setState({
      value : event.target.innerHTML.toLowerCase()
    })
    console.log(event.target.innerHTML.toLowerCase());
  }

  onSubmitNiche = () => {

    const niche = this.state.value
    axios.get(`https://cors-anywhere.herokuapp.com/https://hashhy.herokuapp.com/${niche}`)
    .then((data) => this.setState({ data: data.data}))
    .catch(err => console.log(err))
  }

  componentDidMount(){
    console.log("tool component did mount!!!");
    console.log(this.state)

    //fetch('http://localhost:5000/')
    axios.get('http://3.233.117.183:5000/tool')
    .then((res)=>{
      tool_data = res.data;
      mytool_data = Object.entries(tool_data);
      this.setState({
        data : mytool_data

      })
    })
      .catch((err)=>console.log(err))

      console.log("tool 2 component did mount!!!");  
  }



 
  render(){
    console.log(this.state.value)
    const { value, suggestions } = this.state;



    const inputProps = {
        placeholder: '',
        value,
        onChange: this.onChange
      };

    console.log("hello "+this.state.data)
    return(
      <div>   
        <Helmet>
                <title>Hashtag tool</title>
                <script type='text/javascript' 
                src='https://platform-api.sharethis.com/js/sharethis.js#property=5dd8a2ffac13720012fb6056&product=sticky-share-buttons&cms=sop' 
                async='async'></script>
        </Helmet>




        <div className='container-fluid text-center jumbotron justify-content-center row '>
          <Bounce left>
            <h1 className='  a4'>Instagram Hashtag Tool</h1>
          </Bounce>
          <Bounce left>
            <h6 className='text-center a5'>Hashtags Most Used By Top Micro Influencers</h6>
          </Bounce>
        </div>


        <div className = "categories">
          <div className = "category" onClick = {this.buttonClickEvent}>Fashion</div>
          <div className = "category" onClick = {this.buttonClickEvent}>Travel</div>
          <div className = "category" onClick = {this.buttonClickEvent}>Fitness</div>
          <div className = "category" onClick = {this.buttonClickEvent}>Art</div>
          <div className = "category" onClick = {this.buttonClickEvent}>Finance</div>
          <div className = "category" onClick = {this.buttonClickEvent}>Apparels</div>
          <div className = "category" onClick = {this.buttonClickEvent}>Accessories</div>
          <div className = "category" onClick = {this.buttonClickEvent}>Sports</div>
          <div className = "category" onClick = {this.buttonClickEvent}>Music</div>
          <div className = "category" onClick = {this.buttonClickEvent}>Shopping</div>
          <div className = "category" onClick = {this.buttonClickEvent}>Lifestyle</div>
          <div className = "category" onClick = {this.buttonClickEvent}>Marketing</div>
        </div>

        <div><InnerTool value = {this.state.value} data = {this.state.data}/></div>
      </div>    
      
    )
    


      }
    }




{/*<div className='container c2'>
 <Zoom top>
        <div className='container b13 row justify-content-center'>
          <div className='j1'>
          <b>Select A Niche Of Your Interest</b>
          <div>(start typing in and select from option)</div>
             <div className='d2'>
                   <div className='d1'>
                        <Autosuggest
                     suggestions={suggestions}
                     onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                     onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                     getSuggestionValue={getSuggestionValue}
                     renderSuggestion={renderSuggestion}
                     inputProps={inputProps}
                   />
                  </div>
            </div>
      </div>

        <div className='b7'>
          <div className='b6'>
            <button className='b5' onClick = {this.onSubmitNiche}>Find Hashtags</button>
          </div>
        </div>  


    </div>
  </Zoom>
</div>



 <div className='container b77 text-center row justify-content-center'>

            <Slide top>
 <div className='g1'>

 <div className='g11'>
 <b>Low Difficulty Hashtag</b>
 <p>(For less than 500 followers)</p>
 </div>
{this.state.data.Hashtag1}


 </div>
            </Slide>

            <Slide top>
 <div className='g2'>

 <div className='g11'>
  <b>Medium Difficulty Hashtag</b>
  <p>(For less than 10,000 followers)</p>
 </div>
{this.state.data.Hashtag2}

 </div>
            </Slide>
             <Slide top>
 <div className='g3'>

 <div  className='g11 g33'>
  <b>High Difficulty Hashtag</b>
</div>

{this.state.data.Hashtag3}

 </div>
        </Slide>
 </div>

*/}


    
export default Tools;
