import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategory] = useState(['One Punch'])

    const addCategory = () => {
        // setCategory(['HuntedxHunted', ...categories]);
        setCategory(cats => [...cats, 'HunterxHunter']);
    }

    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategory }/>
            <hr/>
            <button onClick={ addCategory }>Agregar</button>
            <ol>
                {
                    categories.map( category => (
                        <GifGrid key={ category } category={ category }/>
                    ) )
                }
            </ol>
        </div>
    );
}

export default GifExpertApp;