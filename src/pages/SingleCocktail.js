import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import Loading from "../components/Loading";
import {useGlobalContext} from "../context";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [cocktail, setCocktail] = useState(null);
    const {setSearchTerm} = useGlobalContext();

    useEffect(() => {
        setLoading(true);
        const getCocktail = async () => {
            try {
                const result = await fetch(`${url}${id}`);
                const data = await result.json();
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strIngredient6,
                        strIngredient7,
                        strIngredient8,
                        strIngredient9,
                        strIngredient10,
                    } = data.drinks[0];
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strIngredient6,
                        strIngredient7,
                        strIngredient8,
                        strIngredient9,
                        strIngredient10
                    ];
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    }
                    setCocktail(newCocktail);
                } else {
                    setCocktail(null);
                }
                setLoading(false);

            } catch (e) {
                console.log(e)
                setLoading(false)
            }

        }
        getCocktail();
    }, [id])

    if (loading) {
        <Loading/>
    }
    if (!cocktail) {
        return <h2 className='section-title'>no cocktail to display</h2>
    }

    const {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
    } = cocktail;

    const handleReset = () => {
        setSearchTerm('a');
    }

    return (
        <section className='section cocktail-section'>
            <Link to='/' className='btn btn-primary' onClick={handleReset}>back home</Link>
            <h2 className='section-title'> {name} </h2>
            <div className="drink">
                <img src={image} alt={name}/>
                <div className="drink-info">
                    <p>
                        <span className='drink-data'>name :</span>
                        {name}
                    </p>
                    <p>
                        <span className='drink-data'>category :</span>
                        {category}
                    </p>
                    <p>
                        <span className='drink-data'>info :</span>
                        {info}
                    </p>
                    <p>
                        <span className='drink-data'>glass :</span>
                        {glass}
                    </p>
                    <p>
                        <span className='drink-data'>instructions :</span>
                        {instructions}
                    </p>
                    <p>
                        <span className='drink-data'>ingredients :</span>
                        {ingredients.map((item, i) => {
                            return item ? <li key={i}>{item}</li> : null;
                        })}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SingleCocktail
