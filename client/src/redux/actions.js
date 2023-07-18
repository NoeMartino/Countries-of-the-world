import axios from 'axios';

import { GET_COUNTRIES,
    GET_COUNTRIES_ORDER,
    GET_COUNTRY_DETAIL,
    GET_COUNTRY_BY_NAME,
    ORDER_ALPHABETICALLY,
    ORDER_POPULATION,
    FILTER_CONTINENT,
    FILTER_ACTIVITY
 } from "./actionTypes"

export const getCountries = () => {
    return async function (dispatch) {
        let response = await axios("/countries")
        return dispatch({ type: GET_COUNTRIES, payload: response.data })
    }
}

export const getCountriesOrder = () => {
    return async function (dispatch) {
        let response = await axios("/countries")
        return dispatch({ type: GET_COUNTRIES_ORDER, payload: response.data })
    }
}

export const getCountryDetail = (id) => {
    return async function (dispatch) {
        let response = await axios(`/countries/${id}`)
        return dispatch({ type: GET_COUNTRY_DETAIL, payload: response.data })
    }
}

export const getCountryByName = (name) => {
    return async function (dispatch) {
        let response = await axios(`/countries?name=${name}`)
        return dispatch({ type: GET_COUNTRY_BY_NAME, payload: response.data })
    }
}

export const orderAlphabetically = (value) => {
    return { type: ORDER_ALPHABETICALLY, payload: value }
}

export const orderPopulation = (value) => {
    return { type: ORDER_POPULATION, payload: value }
}

export const filterContinent = (value) => {
    return { type: FILTER_CONTINENT, payload: value }
}

export const filterActivity = (value) => {
    return { type: FILTER_ACTIVITY, payload: value }
}

export const postActivity = (activity) => {
    return async function (dispatch) {
        let response = await axios.post("/activities", activity)
        return response
    }
}