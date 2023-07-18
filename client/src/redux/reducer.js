import {
    GET_COUNTRIES,
    GET_COUNTRIES_ORDER,
    GET_COUNTRY_DETAIL,
    GET_COUNTRY_BY_NAME,
    ORDER_ALPHABETICALLY,
    ORDER_POPULATION,
    FILTER_CONTINENT,
    FILTER_ACTIVITY,
    POST_ACTIVITY
} from "./actionTypes"

const initialState = {
    countries: [],
    countriesCopy: [],
    countryDetail: {},
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countriesCopy: action.payload
            }

        case GET_COUNTRIES_ORDER:
            if (state.countries.length !== state.countriesCopy.length || state.countries[0] !== state.countriesCopy[0]) {
                return { ...state }
            } else {
                return {
                    ...state,
                    countries: action.payload,
                    countriesCopy: action.payload
                }
            }

        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload,
            }

        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countriesCopy: action.payload,
            }

        case ORDER_ALPHABETICALLY:
            let orderAlphabetically = [...state.countriesCopy]
            if (action.payload === "From A to Z") {
                orderAlphabetically.sort((a, b) =>
                    a.name > b.name ? 1 : -1
                )
            } else {
                orderAlphabetically.sort((a, b) =>
                    a.name < b.name ? 1 : -1
                )
            }
            return {
                ...state,
                countriesCopy: [...orderAlphabetically]
            }

        case ORDER_POPULATION:
            let orderPopulation = [...state.countriesCopy]
            if (action.payload === "Ascendente") {
                orderPopulation.sort((a, b) =>
                    a.population > b.population ? 1 : -1
                )
            } else {
                orderPopulation.sort((a, b) =>
                    a.population < b.population ? 1 : -1
                )
            }
            return {
                ...state,
                countriesCopy: [...orderPopulation]
            }

        case FILTER_CONTINENT:
            const countriesCopy = [...state.countries]
            const countriesFilteredContinent = action.payload === "All" ? countriesCopy : countriesCopy.filter(c => c.continent === action.payload)
            return {
                ...state,
                countriesCopy: countriesFilteredContinent
            }

        case FILTER_ACTIVITY:
            const countriesCopy2 = [...state.countries]
            const countriesFilteredActivity = action.payload === "All" ? countriesCopy2 : countriesCopy2.filter(c => c.Activities.some(a => a.name === action.payload))
            return {
                ...state,
                countriesCopy: countriesFilteredActivity
            }

        case POST_ACTIVITY:
            return { ...state }

        default:
            return { ...state }
    }
}

export default reducer;