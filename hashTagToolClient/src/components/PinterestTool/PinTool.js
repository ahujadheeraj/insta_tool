import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {Helmet} from 'react-helmet';

import IndexExtra from '../../components/IndexExtra/IndexExtra';
import './indexStyles.css';

export default class PinTool extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            response_set: ['temporary', 'objects'],
            can_download: false,
            timeout_limit: 400,
            response_set_length: 0,
        };
    }

    componentDidMount()
    {
        console.log('Javascript started!');

        // Hide the keyword section in the beginning.
        document.getElementById('keyword-section-container').style.display='none';
    }

    copy_to_clipboard = () => {
        let text_area = document.getElementById('text-box');
        text_area.style.display = 'block';
        text_area.value = this.state.response_set.toString();
        text_area.select();
        document.execCommand('copy');
        text_area.style.display = 'none';
        alert('Copied to clipboard!');
    }

    search_keywords_main = () => {
        console.log('Searching for keywords.');
        const search_for = document.getElementById('input-keyword').value;
        if(search_for === '')
        {
            alert('Please enter some text to search for!');
            return false;
        }

        var response_box = document.getElementById('response-box');

        // Clear the response box.
        response_box.innerHTML = '';

        this.setState({
            response_set: [],
            response_set_length: 0,
        });

        let search_for_values = [search_for];
        search_for_values.push(search_for + ' a');
        search_for_values.push(search_for + ' e');
        search_for_values.push(search_for + ' t');
        search_for_values.push(search_for + ' i');
        search_for_values.push(search_for + ' o');
        search_for_values.push(search_for + ' n');
        search_for_values.push(search_for + ' s');
        for(let i = 0; i < search_for_values.length; i++)
        {
            this.search_keywords(search_for_values[i]);
        }

        console.log(this.state.response_set_length);
    }

    search_keywords = (search_for) => {
        // console.log('Searching for keywords.');
        // const search_for = document.getElementById('input-keyword').value;
        // if(search_for === '')
        // {
        //     alert('Please enter some text to search for!');
        //     return false;
        // }

        // Introduce the keyword section.
        document.getElementById('keyword-section-container').style.display='block';

        const url = 'http://viju895.pythonanywhere.com/' + search_for;
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.send();
        request.onload = () => {
            const data = request.responseText;
            try
            {
                var data_recieved = JSON.parse(data);

                // if(data_recieved.data.length === 0)
                // {
                //     alert('Found no results!\nTry changing the keywords!');
                //     return false;
                // }

                setTimeout(() => {
                    // Show the recieved response in the response box.
                    for(let i = 0; i < data_recieved.data.length; i++)
                    {
                        console.log('adding item');
                        var response_box = document.getElementById('response-box');
                        const text_container = document.createElement('div');
                        text_container.setAttribute('class', 'keyword-container btn btn-primary');
                        text_container.innerText = data_recieved.data[i];
                        response_box.append(text_container);

                        // Push the recieved words in the response_set array.
                        let response_set = this.state.response_set.slice();
                        let response_set_length = this.state.response_set_length;
                        response_set_length += 1;
                        response_set.push(data_recieved.data[i]);
                        this.setState({
                            response_set: response_set,
                            response_set_length: response_set_length,
                        });

                        // Remove the timeout_limit.
                        // The user can now download as CSV.
                        this.setState({
                            timeout_limit: 0,
                            can_download: true,
                        });
                    }
                }, this.state.timeout_limit);
            }
            catch(err)
            {
                console.log('Requst failed.');
                console.error(err.message);
            }
        }
    }

    download_csv = () => {
        let file_name = 'CSV response.csv';
        let download_link = document.getElementById('download-link');
        let text_to_download = encodeURIComponent(this.state.response_set.slice().toString());
        download_link.setAttribute('href', ('data:text/plain;charset=utf-8,' + text_to_download));
        download_link.setAttribute('download', file_name);

        if(!this.state.can_download)
        {
            alert('Cannot download now!');
            return false;
        }

        download_link.click();
    }

    render()
    {
        return (
            <Fade>
                <Helmet>
                    <meta name="keywords" content="Pinterest keyword tool, pinterest SEO, pinterest keyword targeting, pinterest keyword research, how to keyword pinterest, pinterest ads keyword tool" />
                    <title>Pinterest SEO and Keyword Research Tool</title>
                </Helmet>
                <div className="container w-100 mx-auto mt-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading text-center search-heading">
                                <span>Find Keyword Ideas for Pinterest</span>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="col w-100 mx-auto text-center">
                                <div className="input-group">
                                    <input type="text" id="input-keyword" className="form-control" placeholder="Enter a keyword to get started"></input>
                                    <div className="input-group-append">
                                        <button onClick={this.search_keywords_main} className="btn-find-keyword" id="btn-keyword-search">
                                            <svg width="35" height="35" viewBox="0 0 100 100">
                                                <circle cx="32" cy="32" r="25" stroke="black" strokeWidth="8" fill="none"></circle>
                                                <line x1="50" y1="50" x2="80" y2="80" stroke="black" strokeWidth="8"></line>
                                            </svg>
                                            <span>Find Keyword Ideas</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>

                <Zoom top>
                    <div id="keyword-section-container" className="keyword-section-container">
                        <div className="container">
                            <div className="row mx-auto">
                                <div className="row w-100 ml-0">
                                    <h2>Generated Pinterest Keywords</h2>
                                </div>
                                <div className="row w-100 mx-auto text-center">
                                    <div id="response-box" className="response-box"></div>
                                </div>
    
                                <div className="row w-100 justify-content-between mt-4">
                                    <div className="col-4">
                                        <button onClick={this.copy_to_clipboard} id="btn-copy" className="btn-keyword-action">Copy</button>
                                    </div>
                                    <div className="col-4">
                                        <button onClick={this.download_csv} id="btn-download" className="btn-keyword-action">Download</button>
                                    </div>
                                    <div className="col-4">
                                        <button className="btn-keyword-action">Pro Search</button>
                                    </div>
                                </div>

                                <div id="special-function-section">
                                    <textarea id="text-box"></textarea>
                                    <a id="download-link"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
    
                <IndexExtra />
            </Fade>
        );
    }
    
}
