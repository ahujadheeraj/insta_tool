import React from 'react';
import Flip from 'react-reveal/Flip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Helmet} from 'react-helmet';

import IndexExtra from '../../components/IndexExtra/IndexExtra';
import './priceStyles.css';
import {PrettoSlider, marks} from './SliderHelper';

const search_categories = [
    {id: 0, label: 'Art & craft', value: 0.5},
    {id: 1, label: 'Food and Beverages', value: 0.9},
    {id: 2, label: 'Beauty', value: 0.3},
    {id: 3, label: 'Business and Marketing', value: 2},
    {id: 4, label: 'Animation', value: 0.2},
    {id: 5, label: 'Electronics', value: 0.2},
    {id: 6, label:'Fashion', value: 0.7},
    {id: 7, label: 'Fitness', value: 0.7},
    {id: 8, label: 'Food', value: 0.7},
    {id: 9, label: 'Health', value: 1},
    {id: 10, label: 'Home furnishing', value: 1},
    {id: 11, label: 'Parenting', value: 1},
    {id: 12, label: 'Travel', value: 0.6}
];

const countries = [
    {id: 0, label: 'USA'}
];

const languages = [
    {id: 0, label: 'English'}
];

export default class PriceCalc extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            category: '',
            defaultValue: 20000,
            fee_start: 50,
            fee_end: 80,
            x: 0.08,
            xDefault: 0.08,
        }
    }

    updateCategory = (event, newCategory) => {
        let newCategoryToSet = '';
        let newX = 0;

        if(newCategory != null)
        {
            newCategoryToSet = newCategory.label;
            console.log(newCategory.label);
            for(let i = 0; i < search_categories.length; i++)
            {
                if(search_categories[i].label === newCategoryToSet)
                {
                    newX = search_categories[i].value;
                }
            }
        }
        else
        {
            newCategoryToSet = '';
            newX = this.state.xDefault;
        }
    
        this.setState({
            category: newCategoryToSet,
            x: newX,
        })

        this.updatePrice();
    }

    updatePrice = (event, newPrice) => {
        let followers = parseInt(document.getElementsByName('followers-slider')[0].value);
        let likes = parseInt(document.getElementsByName('likes-slider')[0].value);
        let comments = parseInt(document.getElementsByName('comments-slider')[0].value);

        let engagement = ((likes + (2*comments))/followers);
        let fee_start = 0;
        let fee_end = 0;
        let x = this.state.x;

        if(engagement <= 0.08)
        {
            fee_start = engagement * followers * x;
            fee_end = 1.75 * engagement * followers * x;
        }
        else
        {
            fee_start = engagement * followers * 0.08;
            fee_end = 1.75 * engagement * followers * 0.08;
        }

        this.setState({
            fee_start: (Math.round(fee_start * 100)/100),
            fee_end: (Math.round(fee_end * 100)/100),
        });
    }

    componentDidMount()
    {
        this.updatePrice();
    }

    render()
    {
        return (
            <div>
                <Flip top>
                    <Helmet>
                        <title>Instagram Money Calculator Tool</title>
                    </Helmet>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <div className="container w-75 mx-auto mt-2">
                        <h1>How to Use Instagram Money Calculator</h1>
                        <h4>
                            <ol id="tool-guide">
                                <li>Type in a category and sellect one from the options suggested below.</li>
                                <li>Adjust the slider based on estimated likes and comments per post.</li>
                                <li>Select the number of followers. This tool also helps you understand how mush price will increase with more followers.</li>
                            </ol>
                        </h4>

                        <div id="my-input-group">
                            <div id="my-input-group-category">
                                <Autocomplete
                                    id = "category-selector"
                                    options = {search_categories}
                                    fullWidth
                                    getOptionLabel = {search_categories => search_categories.label}
                                    renderInput = {params => (
                                        <TextField {...params} label="Type in a category and select" variant="outlined" fullWidth />
                                    )}
                                    onChange = {this.updateCategory}
                                />
                            </div>
                            <div id="my-input-group-country">
                                <Autocomplete
                                    options = {countries}
                                    fullWidth
                                    getOptionLabel = {countries => countries.label}
                                    renderInput = {params => (
                                        <TextField {...params} label="Select Country" variant="outlined" fullWidth />
                                    )}
                                />
                            </div>
                            <div id="my-input-group-language">
                                <Autocomplete
                                    options = {languages}
                                    fullWidth
                                    getOptionLabel = {languages => languages.label}
                                    renderInput = {params => (
                                        <TextField {...params} label="Select Language" variant="outlined" fullWidth />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div id="tool-container" className="conatiner w-75 mx-auto mt-4">
                        <div id="sliders-options-box">
                            <div className="slider-box">
                                <div className="slider-title">Total Followers</div>
                                <div className="slider-container">
                                    <PrettoSlider
                                        defaultValue={this.state.defaultValue}
                                        marks={marks}
                                        min={0}
                                        max={50000}
                                        valueLabelDisplay="on"
                                        name="followers-slider"
                                        onChange={this.updatePrice}
                                    />
                                </div>
                            </div>
                            <div className="slider-box">
                                <div className="slider-title">Likes per post</div>
                                <div className="slider-container">
                                    <PrettoSlider
                                        defaultValue={this.state.defaultValue}
                                        marks={marks}
                                        min={0}
                                        max={50000}
                                        valueLabelDisplay="on"
                                        name="likes-slider"
                                        onChange={this.updatePrice}
                                    />
                                </div>
                            </div>
                            <div className="slider-box">
                                <div className="slider-title">Comments per post</div>
                                <div className="slider-container">
                                    <PrettoSlider
                                        defaultValue={this.state.defaultValue}
                                        marks={marks}
                                        min={0}
                                        max={50000}
                                        valueLabelDisplay="on"
                                        name="comments-slider"
                                        onChange={this.updatePrice}
                                    />
                                </div>
                            </div>
                        </div>
                        <div id="price-result-container">
                            <div id="price-box">
                                <h6>Estimated Earnings Per Post</h6>
                                <div id="price-range">
                                    <span id="price-range-start">${this.state.fee_start}</span>
                                    <span> - </span>
                                    <span id="price-range-end">${this.state.fee_end}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </Flip>

                <IndexExtra />
            </div>
        );
    }
}
