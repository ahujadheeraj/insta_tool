import React, { Component } from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com';


class Signup extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      sent:false

    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    this.setState({
        ...this.state,
        sent:true
    })
    var template_params = {
        "reply_to": this.state.email,
        "from_name": "Influrocket"
     }
     
     var service_id = "default_service";
     var template_id = "template_K4i69Tzo";
     emailjs.send(service_id, template_id, template_params,'user_YUjOhhnZZKXOh1LIBb7fV')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });
 

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Signup</h1>
  

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

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup