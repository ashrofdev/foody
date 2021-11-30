import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

import Modal from 'react-modal';
import RecipeDetails from './RecipeDetails';

const Recipies = () => {


    const [recipes, setRecipes] = useState(['',''])
    const [openModal, setOpenModal] = useState(false)

    useEffect(()=>{
        getRecipes()
    },[])


    const getRecipes = () => {
        setRecipes(['','','','','','',])
    }


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor:'white',
            borderRadius:'.8rem',
        },
        overlay: {
            backgroundColor: 'rgba(7, 7, 7, 0.574)'
          },
    };

    return (
        <div style={{
            width:'70vw',
            margin:'3rem auto'
        }}>
            
            <h2>RECIPES</h2>

            <div className="recipes-list">
                {
                    recipes.map(recipe=>  <RecipeCard setOpenModal={setOpenModal} recipe={recipe} /> )
                }
            </div>


            <Modal
                isOpen={openModal}
                onRequestClose={()=> setOpenModal(false)}
                style={customStyles}
                contentLabel="Example Modal"
                
            >
                <RecipeDetails/>
            </Modal>
        </div>
    );
};

export default Recipies;