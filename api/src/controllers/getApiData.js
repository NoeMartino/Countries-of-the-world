const axios = require("axios");
const { Country } = require("../db");

const getApiData = async () => {
    try {
        const apiInfo = await axios("https://restcountries.com/v3/all")
        const apiData = await apiInfo.data.map(c => {
            return {
                id: c.cca3,
                name: c.name.common,
                flag: c.flags[1],
                continent: c.continents[0],
                capital: c.capital ? c.capital.join(", ") : "",
                subregion: c.subregion,
                area: c.area,
                population: c.population
            }
        })
        return apiData
    } catch (error) {
        return { error: error.message }
    }
}

const saveApiData = async () => {
    try {
        const allCountries = await getApiData()
        await Country.bulkCreate(allCountries)
        return allCountries
    } catch (error) {
        return { error: error.message }
    }
};

module.exports = saveApiData;