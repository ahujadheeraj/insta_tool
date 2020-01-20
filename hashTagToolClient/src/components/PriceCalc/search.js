import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import './priceStyles.css';

const search_categories = [
    {id: 0, label: 'Art & craft'},
    {id: 1, label: 'Food and Beverages'},
    {id: 2, label: 'Beauty'},
    {id: 3, label: 'Business and Marketing'},
    {id: 4, label: 'Animation'},
    {id: 5, label: 'Electronics'},
    {id: 6, label:'Fashion'},
    {id: 7, label: 'Fitness'},
    {id: 8, label: 'Food'},
    {id: 9, label: 'Health'},
    {id: 10, label: 'Home furnishing'},
    {id: 11, label: 'Parenting'},
    {id: 12, label: 'Travel'}
];

const countries = [
    {id: 0, label: 'USA'}
];

const languages = [
    {id: 0, label: 'English'}
];

export default class SearchBar extends React.Component
{
    render()
    {
        return (
            <div id="my-input-group">
                {/* <input 
                    type="text" 
                    id="input-keyword" 
                    className="form-control"
                    placeholder="Type in a category and select"
                /> */}
                <div id="my-input-group-category">
                    <Autocomplete
                        id = "category-selector"
                        options = {search_categories}
                        fullWidth
                        size = 'small'
                        getOptionLabel = {search_categories => search_categories.label}
                        renderInput = {params => (
                            <TextField {...params} label="Type in a category and select" variant="outlined" fullWidth />
                        )}
                    />
                </div>
                <div id="my-input-group-country">
                    <Autocomplete
                        options = {countries}
                        fullWidth
                        size = 'small'
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
                        size = 'small'
                        getOptionLabel = {languages => languages.label}
                        renderInput = {params => (
                            <TextField {...params} label="Select Language" variant="outlined" fullWidth />
                        )}
                    />
                </div>
                    {/* <button className="btn-find-keyword">
                        <span>Country</span>
                        <select>
                            <option value="usa">USA</option>
                        </select>
                    </button>
                    <button className="btn-find-keyword">
                        <span>Language</span>
                        <select>
                            <option value="english">English</option>
                        </select>
                    </button> */}
                
            </div>
        )
    }
}
