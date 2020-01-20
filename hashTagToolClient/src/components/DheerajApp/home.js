import React, { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import { CSVLink, CSVDownload } from "react-csv";
import Autosuggest from 'react-autosuggest';
import Condition from './condition'
import axios from 'axios';
import {Helmet} from "react-helmet";



import { MdContacts,MdAllInclusive,MdDashboard,MdViewCarousel,MdWbIridescent } from "react-icons/md";


const username = [
{ name: 'art',},
{ name: 'adventure',},
{ name: 'travel',},
{ name: 'lifestyle',},
{ name: 'nature',},
{ name: 'fashion',},
{ name: 'startup',},
{ name: 'beach',},
{ name: 'health',},
{ name: 'quotes',},
{ name: 'home',},
{ name: 'trip',},
{ name: 'music',},
{ name: 'fitness',},
{ name: 'business',},
{ name: 'finance',},
{ name: 'design',},
{ name: 'craft',},
{ name: 'baby',},
{ name: 'marketing',},
{ name: 'animal lover',},
{ name: 'food',},
{ name: 'painting',},
{ name: 'pets',},
{ name: 'shopping',}

]



const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : username.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};


var neededValue = '';
var dat = ''
const getSuggestionValue = suggestion => (
  neededValue = suggestion.name,
  suggestion.name
  )

const renderSuggestion = suggestion => {

    return (
      <div className='c1 shadow'>
      {suggestion.name}
    </div>

    )
  }





class Home extends Component {

  state = {
      value: '',
      suggestions: [],
      csv: false,
      persons:[]
    };

  onChange = (event, { newValue }) => {
   this.setState({
     value: newValue,
     csv: true
   });
 };

 onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),      
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };


  componentDidMount(){
    console.log("component did mount!!!");
    console.log(this.state)

    axios.get('http://localhost:5000/')
    //axios.get('http://3.233.117.183:5000/')
    .then((res)=>
      dat = res.data,
      console.log(dat))
    
}



  render(){
    

    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: '',
      value,
      onChange: this.onChange
    };

    return <div className = "home">

        <Helmet>
                <title>Follow-back tool</title>
                <script type='text/javascript' 
                src='https://platform-api.sharethis.com/js/sharethis.js#property=5dd8a2ffac13720012fb6056&product=sticky-share-buttons&cms=sop' 
                async='async'></script>
        </Helmet>




    <div className=' text-center jumbotron justify-content-center row '>
    <Bounce left>
   <h1 className='  a4'>Instagram Follow-back Tool</h1>
    </Bounce>

  <Bounce left>
   <h6 className='text-center a5'>Get Up To 50 Accounts With 80% follow-back potential</h6>


      <div className='container row justify-content-center aligner s8'>
        <Zoom top>
          <div className='s2'>
          <h1 className='s1 s4'>Your IG Account Name</h1>
            <input  className='s3' placeholder='Type IG account name'/>
          </div>
        </Zoom>

        <Zoom top>
          <div  className='s2'>
            <h1 className='s1'>Type a Niche (like fitness, fashion, business, lifestyle, travel)* </h1>
            <div className='s2 mys2'>
                <div className='s3'>
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
        </Zoom>
        <Zoom top>
          <div className='s2' >
            <Condition Value = {neededValue} data = {dat}/>
          </div>
        </Zoom>
      </div>
  </Bounce>
  </div>
  </div>
  }
}
export default Home;
