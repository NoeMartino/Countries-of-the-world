const { Country, Activity } = require("../db");

const getCountries = async (req, res) => {
    try {
        const { name } = req.query;
        let allCountries = await Country.findAll({
            include: { model: Activity }
        })
        if (name) {
            const countryName = await allCountries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
            if (countryName.length) {
                res.status(200).json(countryName)
            } else {
                res.status(404).json({ error: "Country not found" })
            }
        } else {
            res.status(200).json(allCountries)
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
};

const getCountryById = async (req, res) => {
    const { id } = req.params;
    const idC = id.toUpperCase()
    try {
        const countryId = await Country.findOne({
            where: { id: idC },
            include: { model: Activity }
        })
        if(countryId) res.status(200).json(countryId)
        else res.status(404).send("Country not found")
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
};

module.exports = {
    getCountries,
    getCountryById
}