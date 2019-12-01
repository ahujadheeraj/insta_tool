import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Logo from '../../img/logo.jpg'


import { Link } from 'react-router-dom'


class Navbar extends Component{
    render(){
        return (
            <div className='a1'>
            <Fade bottom>
            <div className='container-fluid '>

            <Link to = '/'><img src = {Logo} alt = "influrocket" style = {{height:"inherit",width:"230px"}}></img></Link>

            <button className='btn a2 float-right' onClick={() => window.open('https://www.influrocket.com/contact')}>Contact</button>
            <button className='btn a2 float-right' onClick={() => window.open('https://www.influrocket.com/blogs/')}>Blog</button>
            <button className='btn a2 float-right' onClick={() => window.open('https://www.influrocket.com/newsletter')}>Newsletter</button>
            <button className='btn a2 float-right' onClick={() => window.open('https://www.influrocket.com/tools')}>Tools</button>
            <button className='btn a2 float-right' onClick={() => window.open('https://www.influrocket.com/services')}>Services</button>
            <button className='btn a2 float-right' onClick={() => window.open('https://www.influrocket.com')}>Home</button>
            <Link to='/followback'><button className='btn a2 float-right'>Follow-back Tools</button></Link>
            <Link to='/hashtag'><button className='btn a2 float-right'>HashTag Tool</button></Link>
            {/*<Link to='/contact'><button className='btn a2 float-right'>Contact</button></Link>
            <Link to='/blog'><button className='btn a2 float-right'>Blog</button></Link>

            <Link to='/newsletter'><button className='btn a2 float-right'>Newsletter</button></Link>

            
            <Link to='https://www.influrocket.com'><button className='btn a2 float-right'>Home</button></Link>*/}


            </div>
            </Fade>
            </div>

        )
        
    }
}

export default Navbar;

