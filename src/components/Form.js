import React from 'react';


//this is a stateless function component
const Form = props => (
    <form onSubmit={props.getRecipe}>
        <input type="text" name="recipeName"></input>
        <button>Search</button>
    </form>
);

export default Form;