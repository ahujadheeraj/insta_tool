import React,{Component} from 'react'
import one from '../../assets/images/icons/ourlifeinseasons.jpg'
import two from '../../assets/images/icons/makeupbyjamieg.jpg'
import three from '../../assets/images/icons/sarzmahal.jpg'



import './result.css'

class Result extends Component{
    render (){
        return(
            <div className = "result">
                <div className = "result-head">
                    <h4 style = {{fontWeight:800}}>Result for Top Micro Influencers</h4>
                    <h5 style = {{fontWeight:800}}>Projected influencer fee range : $90 - $120</h5>
                </div>

                <div className = "result-mid">
                        <div className = "in-profile">
                            <img src = {one}/>
                            <h6 className = "in-name">Our Life In Seasons</h6>
                            <div className = "in-id">Our Life In Seasons</div>
                            <div className = "in-follow">Followers : 1.2M</div>
                        </div>
                        <div className = "in-profile">
                            <img src = {two}/>
                            <h6 className = "in-name">Makeup by Jamieg</h6>
                            <div className = "in-id">Makeup by Jamieg</div>
                            <div className = "in-follow">Followers : 1.2M</div>
                        </div>
                        <div className = "in-profile">
                            <img src = {three}/>
                            <h6 className = "in-name">Sarzmahal</h6>
                            <div className = "in-id">Sarzmahal</div>
                            <div className = "in-follow">Followers : 1.2M</div>
                        </div>
                        


                </div>
                <div className = "result-foot">
                    <h5 style = {{fontWeight:800}}>Find full name, Username, Followers Count, bio, Address &</h5>
                    <h5 style = {{fontWeight:800}}>Engagement ratio of 10 influencers with advanced search</h5>

                    <button className = "result-foot-button">Advanced Search</button>
                </div>


            </div>

        )
    }
}

export default Result;