const validate = (inputs) => {

    const errors = {}

    if (inputs.idC.length < 1) {
        errors.idC = "Select at least one country"
    }
    if (!inputs.name) {
        errors.name = "Name is required"
    }
    if(!/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/.test(inputs.name)) {
        errors.name = "Name cannot include numbers or symbols"
    }
    if (inputs.difficulty < 1 || inputs.difficulty > 5) {
        errors.difficulty = "Difficulty must be between 1 and 5"
    }
    if (inputs.duration < 1) {
        errors.duration = "Indicate the duration in hours"
    }
    if (inputs.duration > 10) {
        errors.duration = "Duration cannot be longer than 10 hours"
    }
    if (inputs.season === "") {
        errors.season = "Select the season"
    }

    return errors
}

export default validate;