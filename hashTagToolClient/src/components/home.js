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


import { MdContacts,MdAllInclusive,MdDashboard,MdViewCarousel,MdWbIridescent } from "react-icons/md";


const username = [
  {
   name: 'animal lover',

  },
  {
   name: 'business',
  },
  {
   name: 'fashion',
  },
  {
   name: 'food',
  },
  {
   name: 'fitness',
  },

  {
   name: 'lifestyle',
  },
  {
   name: 'painting',
  },
  {
   name: 'pets',
  },
  {
   name: 'shopping',
  },
  {
   name: 'travel',
  },

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

    //fetch('http://localhost:5000/')
    axios.get('3.233.117.183:5000/')
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

    return <div>

 <div className='a1'>
        <Fade bottom>
 <div className='container-fluid '>

<Link to = '/tools'><span className='v1'>Influ<span className='v2'>Rocket</span></span></Link>
<button className='btn a2 float-right' onClick={() => window.open('https://www.influrocket.com/contact')}>Contact</button>
<button className='btn a2 float-right' onClick={() => window.open('https://www.influrocket.com/blogs/')}>Blog</button>
<button className='btn a2 float-right' onClick={() => window.open('https://www.influrocket.com/newsletter')}>Newsletter</button>
<button className='btn a2 float-right' onClick={() => window.open('https://www.influrocket.com/tools')}>Tools</button>
<button className='btn a2 float-right' onClick={() => window.open('https://www.influrocket.com/services')}>Services</button>
<button className='btn a2 float-right' onClick={() => window.open('https://www.influrocket.com')}>Home</button>
  {/*<Link to='/contact'><button className='btn a2 float-right'>Contact</button></Link>
    <Link to='/blog'><button className='btn a2 float-right'>Blog</button></Link>

  <Link to='/newsletter'><button className='btn a2 float-right'>Newsletter</button></Link>

  <Link to='/tools'><button className='btn a2 float-right'>Tools</button></Link>
  <Link to='/services'><button className='btn a2 float-right'>Services</button></Link>
  <Link to='https://www.influrocket.com'><button className='btn a2 float-right'>Home</button></Link>*/}


 </div>
  </Fade>
 </div>
    <div className='container-fluid text-center jumbotron justify-content-center row '>
            <Bounce left>
   <h1 className='  a4'>Instagram Follow-back Tool</h1>
           </Bounce>

                     <Bounce left>
   <h6 className='text-center a5'>Get Up To 50 Accounts With 80% follow-back potential</h6>


   <div className='container row justify-content-center s8'>
    <Zoom top>
   <div className='s2'>
   <h1 className='s1 s4'>Your IG Account Name</h1>
<input  className='s3' placeholder='Type IG account name'/>
   </div>
    </Zoom>

 <Zoom top>
   <div  className='s2'>
   <h1 className='s1'>Select A Niche(choose from options)</h1>
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
