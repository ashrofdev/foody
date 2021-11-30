import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const Recipies = () => {


    const [recipes, setRecipes] = useState(['',''])

    useEffect(()=>{
        getRecipes()
    },[])


    const getRecipes = () => {
        setRecipes(['','','','','','',])
    }

    return (
        <div style={{
            width:'70vw',
            margin:'3rem auto'
        }}>
            
            <h2>RECIPES</h2>

            <div className="recipes-list">
                {
                    recipes.map(recipe=>  <RecipeCard  recipe={recipe} /> )
                }
            </div>
        </div>
    );
};

export default Recipies;