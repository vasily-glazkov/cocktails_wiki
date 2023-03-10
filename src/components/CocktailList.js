import React from 'react'
import Loading from "./Loading";
import {useGlobalContext} from "../context";
import Cocktail from "./Cocktail";

const CocktailList = () => {
    const {cocktails, loading} = useGlobalContext();

    if (loading) {
        return <Loading/>
    }
    if (cocktails.length < 1) {
        return (
            <h2>no cocktails matched your search criteria</h2>
        )
    }

    return (
        <section className='section'>
            <h2 className='section-title'>
                cocktails
            </h2>
            <div className="cocktails-center">
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item}/>
                })}
            </div>
        </section>
    )
}

export default CocktailList
