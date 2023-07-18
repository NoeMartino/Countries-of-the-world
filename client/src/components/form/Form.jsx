import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getCountries, postActivity } from '../../redux/actions';
import validate from "./validate";
import style from "../form/Form.module.css";

const Form = () => {

    const [inputs, setInputs] = useState({
        idC: [],
        name: "",
        difficulty: 0,
        duration: 0,
        season: ""
    })

    const [errors, setErrors] = useState({
        idC: "",
        name: "",
        difficulty: "",
        duration: "",
        season: ""
    })

    const [created, setCreated] = useState(false)

    const [incomplete, setIncomplete] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    const countries = useSelector((state) => state.countries);
    const countriesSorted = countries.sort((a, b) =>
        a.name > b.name ? 1 : -1
    )

    const handleSelectCountry = (event) => {
        setInputs({
            ...inputs,
            idC: [...inputs.idC, event.target.value]
        })

        setErrors(validate({
            ...inputs,
            idC: event.target.value
        }))
    }

    const handleDelete = (idCountry) => {
        const idCDeleted = inputs.idC.filter(c => c !== idCountry)
        setInputs(prevInputs => ({
            ...prevInputs,
            idC: idCDeleted
        }))

        setErrors(validate({
            ...inputs,
            idC: idCDeleted
        }))
    }

    const handleInputChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })

        setErrors(validate({
            ...inputs,
            [event.target.name]: event.target.value
        }))
    }

    const handleSelectSeason = (event) => {
        setInputs({
            ...inputs,
            season: event.target.value
        })

        setErrors(validate({
            ...inputs,
            season: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (Object.keys(errors).length === 0) {
            dispatch(postActivity(inputs))
            setInputs({
                idC: "",
                name: "",
                difficulty: 0,
                duration: 0,
                season: ""
            })
            setCreated(true)
            setTimeout(() => setCreated(false), 2000)
        } else {
            setIncomplete(true)
            setTimeout(() => setIncomplete(false), 3000)
        }
    }
    
    return (
        <div className={style.background}>
            <div className={style.titleContainer}>
                <Link to="/home" ><button className={style.buttonBack}>Back</button></Link>
                <h1 className={style.title} >Create turistic activity</h1>
                {created && <img className={style.imageCreated} src="created.png" alt="Created"></img>}
                {incomplete && <img className={style.imageIncomplete} src="incomplete.png" alt="Incomplete"></img>}
            </div>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.countriesContainer}>
                    <select className={style.select} onChange={handleSelectCountry} defaultValue="Countries:">
                        <option disabled="disabled" hidden="hidden">Countries:</option>
                        {countriesSorted && countriesSorted.map(c =>
                            <option key={c.id} value={c.id}>{c.name}</option>
                        )}
                    </select>
                    {errors.idC && <p className={style.warning}>{errors.idC}</p>}
                    <ul className={style.list}><label className={style.labelCountries} htmlFor="countries">Countries: </label>
                    {inputs.idC && inputs.idC.map(c => <div key={c}><li className={style.li}>{c}<button className={style.buttonX} onClick={() => handleDelete(c)}>X</button></li></div>)}</ul>
                </div>
                <div className={style.container}>
                    <label className={style.label} htmlFor="name">Name:</label>
                    <input className={style.inputName} type="text" name="name" value={inputs.name} placeholder="" onChange={handleInputChange} />
                    <label className={style.label} htmlFor="difficulty">Difficulty:</label>
                    <input className={style.input} type="number" name="difficulty" value={inputs.difficulty} placeholder="" onChange={handleInputChange} />
                    <label className={style.label} htmlFor="duration">Duration (hours):</label>
                    <input className={style.input} type="number" name="duration" value={inputs.duration} placeholder="" onChange={handleInputChange} />
                    <label className={style.label} htmlFor="season">Season:</label>
                    <select className={style.selectSeason} onChange={handleSelectSeason} defaultValue="Season">
                        <option disabled="disabled" hidden="hidden">Season</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                    </select>
                </div>
                <div className={style.errorsContainer}>
                    {errors.name && <p className={style.warningName}>{errors.name}</p>}
                    {errors.difficulty && <p className={style.warningDifficulty}>{errors.difficulty}</p>}
                    {errors.duration && <p className={style.warningDuration}>{errors.duration}</p>}
                    {errors.season && <p className={style.warningSeason}>{errors.season}</p>}
                </div>
                <button type="submit" className={style.buttonCreate}>Create</button>
            </form>
        </div>
    )
}

export default Form;