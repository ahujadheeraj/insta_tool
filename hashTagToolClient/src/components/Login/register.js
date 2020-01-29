import React, { Component } from 'react'
import axios from 'axios'

//import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      youtube:false,
      pinterest:false,
      instagram:false,
      category:''

    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleYoutubeChange = this.handleYoutubeChange.bind(this)
    this.handleInstagramChange = this.handleInstagramChange.bind(this)
    this.handlePinterestChange = this.handlePinterestChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)


  }
  register = newUser => {
    return axios
      .post('http://localhost:5000/users/register', {

        email: newUser.email,
        password: newUser.password,
        youtube:newUser.youtube,
        pinterest:newUser.pinterest,
        instagram:newUser.instagram,
        category:newUser.category
      })
      
  }
  

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleYoutubeChange(e){
    this.setState({
      ...this.state,
      youtube:true}
    )
  }
  handleInstagramChange(e){
    this.setState({
      ...this.state,
      instagram:true}
    )
  }
  handlePinterestChange(e){
    this.setState({
      ...this.state,
      pinterest:true
    })
  }
  handleCategoryChange(e){
    this.setState({
      ...this.state,
      category:e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
      pinterest: this.state.pinterest,
      category:this.state.category

    }
    console.log(newUser);

    this.register(newUser)
    .then(res => {
      console.log(res)
      if(res.data.error){
        console.log(res.data.error)
        alert(res.data.error);
        this.props.history.push(`/register`)

      }
      else{
        this.props.history.push(`/login`)

      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>

              
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tools">Tools</label>
              </div>
              <div className="form-group">
                <label htmlFor="instagram">Instagram</label>
                <input type="checkbox" value="Instagram" 
                      checked={this.state.instagram} 
                      onChange={this.handleInstagramChange} />
                <label htmlFor="youtube">Youtube</label>
                <input type="checkbox" value="Youtube" 
                      checked={this.state.youtube} 
                      onChange={this.handleYoutubeChange} /> 
                <label htmlFor="pinterest">Pinterest</label>
                <input type="checkbox" value="Pinterest" 
                      checked={this.state.pinterest} 
                      onChange={this.handlePinterestChange} /> 
              </div>
              <div className="form-group">
                <label htmlFor="tools">Category</label>
              </div>
              <div className="form-group">
                <select onChange = {this.handleCategoryChange}>
                  <option value = "">Art and craft</option>
                  <option value = "Food and Beverages">Food and Beverages</option>
                  <option value = "Beauty">Beauty</option>
                  <option value = "Business and Marketing">Business and Marketing</option>
                  <option value = "Animation">Animation</option>
                  <option value = "Electronics">Electronics</option>
                  <option value = "Fashion">Fashion</option>
                  <option value = "Fitness">Fitness</option>
                  <option value = "Health">Health</option>
                  <option value = "Home furnishing">Home furnishing</option>
                  <option value = "Parenting">Parenting</option>
                  <option value = "Travel">Travel</option>

                </select> 
              </div>
              
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register