import React from 'react';
import Fade from 'react-reveal';
import MediumEditor from 'medium-editor';

import './BlogAdminStyles.css';

export default class BlogAdmin extends React.Component
{
    constructor()
    {
        super();
        // var editor;
        this.state = {
            editor: '',
        };
    }

    componentDidMount = () => {
        const editor = new MediumEditor('.editable', {
            placeholder: {
                text: 'Type here',
                hideOnClick: false
            }
        });
    }

    render()
    {
        return (
            <Fade>
                <div className="container mt-5 mb-5">
                    <div id="tools-belt" className="row mt-5 mb-5">
                        <div className="col">
                            <h1>Hello</h1>
                        </div>
                        <div className="col">
                            <h4>Hi</h4>
                        </div>
                    </div>

                    <div id="editor" className="row">
                        <div id="edit" className="col-8">
                            <div className="editable"></div>
                        </div>
                        <div className="col-4">
                            <div id="side-bar" className=""></div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}