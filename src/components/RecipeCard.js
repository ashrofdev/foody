import React from 'react';
import temp from '../resources/images/temp.jpg'

const RecipeCard = ({setOpenModal}) => {
    return (
        <div onClick={()=> setOpenModal(true)} className="recipe">
            <div style={{}}>
                <img alt="img" style={{width:'100%', height:'100%'}} src={temp}/>
            </div>
            <div className="details">
                <h4>Chicken Burger</h4>
                <p style={{
                    fontSize:'.6rem'
                }}>2 words note</p>
            </div>
            <div className="hover-details">
                
                <p>View</p>
            </div>
        </div>
    );
};

export default RecipeCard;