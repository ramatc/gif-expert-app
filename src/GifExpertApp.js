import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import Footer from './components/Footer';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Rick and Morty", "The Mandalorian"]);
    
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

           <Footer/>

        </>
    )
}

export default GifExpertApp;
