import React from 'react';
import Fade from 'react-reveal';

import './AdminStyles.css';

export default class Admin extends React.Component
{
    render()
    {
        return (
            <Fade>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="modal-container col-md-4 ml-2 mr-2">
                            <form action="/admin" method="POST">
                                <div className="form-group">
                                    <label for="emailInput">Email Address</label>
                                    <input id="emailInput" type="email" className="form-control"  required/>
                                </div>
                                <div className="form-group">
                                    <label for="passwordInput">Password</label>
                                    <input id="passwordInput" type="password" className="form-control" required/>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </Fade>
        );
    }
}
