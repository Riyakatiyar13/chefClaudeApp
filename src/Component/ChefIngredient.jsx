import React from "react";

export default function ChefIngredient({ myarr }) {
    const IngredientListItem = myarr.map((element, index) => (
        <li key={index}>{element}</li>
    ));
    
    const [result, setResult] = React.useState("hello");

    function handleresult() {
        setResult("Definitely");
    }

    return ( 

        <>
            <h2>Ingredients on List:</h2> 
            {/* <button onClick={handleresult}>Click me</button> */}
            <ul>
                {IngredientListItem}
            </ul>
        </>
        
    );
}
