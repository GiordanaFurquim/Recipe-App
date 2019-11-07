import React from "react";
import {Link} from 'react-router-dom';

const API_KEY = "0c2f8e901379b13c2bb517e6248eeb61";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    
    const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    
    const res = await req.json();
        this.setState({ activeRecipe: res.recipes[0]});        
    
    }
    render () {
        console.log(this.props);
        const recipe = this.state.activeRecipe;
        return (
            <div className="container">
                { this.state.activeRecipe.length !== 0 && 
                    <div className="active-container">
                    <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
                    <h3 className="active-recipe__title">{recipe.title}</h3>
                    <h4 className="active-recipe__piblisher">
                        Publisher: <span>{recipe.publisher}</span>
                    </h4>
                    <p className="active-recipe__website">Website: 
                    <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                    </p>
                    <button className="active-recipe__button"><Link to="/">Go Home</Link></button>
                </div>
                }
            </div>
        );
    }

}

export default Recipe;