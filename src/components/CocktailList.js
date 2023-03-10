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
            <section className='section'>
                <div className='section-title'>
                    <h3>no cocktails matched your search criteria</h3>
                </div>
            </section>

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
