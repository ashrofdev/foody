import React from 'react';

const RecipeCard = ({setOpenModal}) => {



    return (
        <div onClick={()=> setOpenModal(true)} className="recipe">
            <div style={{}}>
                <img alt="img" style={{width:'100%', height:'100%'}} src="data:image/jpeg;base64,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"/>
            </div>
            <div className="details">
                <h4>Chicken Burger</h4>
                <p style={{
                    fontSize:'.6rem'
                }}>2 words note</p>
            </div>
        </div>
    );
};

export default RecipeCard;