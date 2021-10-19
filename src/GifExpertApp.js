import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Rick and Morty"]);
    
    return (
        <>
            <h1>GifExpertApp</h1>
            <h2>Search Your Favourites GIFs</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ul>
             {
                 categories.map( category =>  
                    <GifGrid 
                        key= {category}
                        category= {category}
                    />
                 )
             }
            </ul>
        </>
    )
}

export default GifExpertApp;
