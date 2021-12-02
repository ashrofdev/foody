import React from 'react';
import temp from '../resources/images/temp.jpg'
import {BiLike,BiDislike,BiStar,BiMoviePlay} from 'react-icons/bi'
const RecipeDetails = () => {
    return (
        <div className="modal-container">
            <div className="detail-top" style={{}}>
                <div>
                    <img alt="img" width="100%" src={temp}/>
                </div>
                
                <div className="top-right">
                    <div className="nutrition">
                        <h2>Nutritional Values</h2>
                        <ul>
                            <li>fat - 10%</li>
                            <li>carbonhydrate - 20%</li>
                            <li>protein - 20%</li>
                            <li>oil - 20%</li>
                            <li>something - 20%</li>
                        </ul>
                    </div>
                    <div className="rating">
                        <h3>Review</h3>
                        <div className="rates">
                            <div className="thumb">
                                <BiLike id="like"/>&nbsp;
                                <span>100</span>

                            </div>
                            <div className="thumb">
                                <BiDislike id="dislike"/>&nbsp;
                                <span>50</span>

                            </div>
                            
                            <div className="thumb">
                                <BiStar id="star"/>&nbsp;
                                <span>0.5</span>

                            </div>
                            
                        </div>
                    </div>
                    <div className="credit">
                        <h3>Credit</h3>
                        <div className="names">
                            <p>someone</p>
                            <p>anyone</p>
                            <p>somebody</p>
                            <p>person</p>
                        </div>
                    </div>
                    <div className="video-link">
                        <a href={"#"}><BiMoviePlay id="video"/>&nbsp;Cooking Video</a>
                    </div>
                    
                </div>
                
                
            </div>

            <div className='details' >
                <h2 >Chicken Burger</h2>
               
                <p >
                    djkbn gkre guker giuergre iugeirug lrueg eruig reliug riu 
                    gelriug rel gerliu gerliuglureg ureli gure igerui greu 
                    geiru glrueg eruig reliug riu gelriug rel gerliu 
                    gerliuglureg ureli gure igerui greu geiru.
                </p>
                
                <div className="detail-bottom">
                    <div className="ingredients">
                        <h4 >Ingredients</h4>
                        <ol>
                            <li > Chicken</li>
                            <li > Chicken</li>
                            <li > Chicken</li>
                            <li > Chicken</li>
                            <li > Chicken</li>
                        </ol>

                    </div>
                    <div className="steps">
                        <h4 >Cooking instructions</h4>
                        <ol>
                            <li > gerliu gerliuglureg ureli gure igerui greu</li>
                            <li > Chicken</li>
                            <li > gerliu gerliuglureg ureli gure igerui greu</li>
                            <li > Chicken</li>
                            <li > gerliu gerliuglureg ureli gure igerui greu</li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RecipeDetails;