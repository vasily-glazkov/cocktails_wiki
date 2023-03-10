import React, {useEffect, useRef} from 'react'
import {useGlobalContext} from "../context";

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const searchValue = useRef('');

    // To focus an input field when a component mounts:
    useEffect(() => {
        searchValue.current.focus();
    }, [])

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // const handleReset = () => {
    //     setSearchTerm('a');
    // }

    return (
        <section className='section search'>
            <form className="search-form" onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">search your cocktail</label>
                    <input
                        type="text"
                        id='name'
                        ref={searchValue}
                        onChange={searchCocktail}
                    />
                    {/*<button className='btn btn-primary' onClick={handleReset}>reset</button>*/}
                </div>
            </form>
        </section>
    )
}

export default SearchForm
