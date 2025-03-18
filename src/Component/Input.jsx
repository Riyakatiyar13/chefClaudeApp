import React from "react";
import RecipeContent from "./RecipeCode";
import ChefIngredient from "./ChefIngredient";

export default function Ingredient() {
    const [myarr, setMyarr] = React.useState(["Maggie", "Olive Oil", "Vegetable", "Sauce", "Salt"]);
    const [showRecipe, setShowRecipe] = React.useState(false);

    function handleSubmit(event) {
        event.preventDefault(); // Prevent page reload on form submit
        const formData = new FormData(event.target);
        const newIngredient = formData.get("inputingredient");
        
        if (newIngredient.trim()) {
            setMyarr(prevArr => [...prevArr, newIngredient.trim()]);
            event.target.reset(); // Clear input field after adding
        }
    }

    function ShowRecipe1() {
        setShowRecipe(prev => !prev);
    }

    return (
        <>
            <div className="myrecipe">
                <form onSubmit={handleSubmit} id="myid">
                    <div className="myinput">
                        <input type="text" placeholder="e.g. Oregano" name="inputingredient" />
                        <button type="submit" className="add">+ Add Ingredient</button>
                    </div>
                </form>

                <div className="recipe-item">
                   <ChefIngredient myarr={myarr} />
                </div>

                <div className="recipeContainer">
                    <div className="left">
                        <h4>Ready for a recipe?</h4>
                        <p>Generate a Recipe from List of Ingredients</p>
                    </div>
                    <div className="right">
                        <button className="recipe" onClick={ShowRecipe1}>Get a recipe</button>
                    </div>
                </div>

                {showRecipe && <RecipeContent />}
            </div>
        </>
    );
}
