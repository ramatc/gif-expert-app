import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 0){
            setCategories([inputValue]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit= { handleSubmit }>
            <div className="div_form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={ handleInputChange }
                    placeholder="Enter your favourites GIFs..."
                />
                <button className="btnSearch">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
