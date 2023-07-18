const { Activity } = require("../db");

const getActivities = async (req, res) => {
    try {
        const allActivities = await Activity.findAll()
        res.status(200).json(allActivities)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

const postActivity = async (req, res) => {
    const { idC, name, difficulty, duration, season } = req.body;
    try {
        if (!name || !difficulty || !season) res.status(400).send("Missing data")
        else {
            const newActivity = await Activity.create({
                name,
                difficulty,
                duration,
                season
            })
            newActivity.addCountry(idC)
            res.status(200).send("Activity created")
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    postActivity,
    getActivities
}