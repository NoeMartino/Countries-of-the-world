import { useDispatch } from 'react-redux';
import { useState } from "react";
import { getCountryByName, getCountries } from "../../redux/actions";
import style from "../searchBar/SearchBar.module.css";

const SearchBar = (props) => {

    const dispatch = useDispatch();

    const [countryName, setCountryName] = useState("");

    const [notFound, setNotFound] = useState(false)

    const handleChange = (event) => {
        setCountryName(event.target.value)
    }

    const handleClick = () => {
        dispatch(getCountryByName(countryName))
        .then()
        .catch(error => setNotFound(true),
        setTimeout(() => setNotFound(false), 2000))
        setCountryName("")
        props.paged(1)
    }

    const handleClickClear = () => {
        dispatch(getCountries())
    }

    return (
        <div>
            {notFound && <img className={style.imageNotFound} src="notfound.png" alt="Not found"></img>}
            <input className={style.input}
                type="search"
                placeholder="🔍 Write country name"
                value={countryName}
                onChange={handleChange} />
            <button className={style.button}
                onClick={handleClick}>
                SEARCH</button>
                <button className={style.button}
                onClick={handleClickClear}>
                CLEAN</button>
        </div>
    )
}

export default SearchBar;