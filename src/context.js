import React, {useCallback, useContext, useEffect, useState} from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = useCallback(async () =>{
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            const {drinks} = data;
            if(drinks) {
                const newDrinks = drinks.map((drink) => {
                    const {idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                        strInstructions,
                    } = drink;
                    return {id:idDrink,
                        name:strDrink,
                        image:strDrinkThumb,
                        info:strAlcoholic,
                        glass:strGlass,
                        instructions:strInstructions
                    }
                })
                setCocktails(newDrinks);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }, [searchTerm])

    useEffect(() => {
        fetchDrinks();
    }, [searchTerm, fetchDrinks])

    return <AppContext.Provider value={{
        loading,
        setSearchTerm,
        cocktails,
    }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
