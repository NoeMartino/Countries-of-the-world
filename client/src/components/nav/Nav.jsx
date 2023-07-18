import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchBar from "../searchBar/searchBar";
import { orderAlphabetically, orderPopulation, filterContinent, filterActivity } from '../../redux/actions';
import style from "../nav/Nav.module.css";
import axios from 'axios';

const Nav = (props) => {

    const dispatch = useDispatch();

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios("/activities")
            .then((act) => setActivities(act.data))
            .catch((err) => console.log(err))
    }, [])

    const activitiesNoRepeat = activities.filter(
        (act, index, self) => index === self.findIndex((a) => a.name === act.name)
    )

    const handleOrderAlphabetically = (event) => {
        dispatch(orderAlphabetically(event.target.value))
        props.paged(1)
    }

    const handleOrderPopulation = (event) => {
        dispatch(orderPopulation(event.target.value))
        props.paged(1)
    }

    const handleFilterContinent = (event) => {
        dispatch(filterContinent(event.target.value))
        props.paged(1)
    }

    const handleFilterActivity = (event) => {
        dispatch(filterActivity(event.target.value))
        props.paged(1)
    }

    return (
        <div className={style.nav}>
            <div className={style.navBar}>
                <Link className={style.link} to="/form">Create tourist activity</Link>
                <SearchBar paged={props.paged}/>
            </div>
            <div className={style.selectsContainer}>
                <select onChange={handleOrderAlphabetically} className={style.select} >
                    <option value="order">Sort alphabetically</option>
                    <option value="From A to Z">From A to Z</option>
                    <option value="From Z to A">From Z to A</option>
                </select>
                <select onChange={handleOrderPopulation} className={style.select} >
                    <option value="order">Sort by population</option>
                    <option value="Ascendente">Less to more populated</option>
                    <option value="Descendente">More to less populated</option>
                </select>
                <select onChange={handleFilterContinent} className={style.select} >
                    <option value="filter">Filter by continent</option>
                    <option value="All">All</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <select onChange={handleFilterActivity} className={style.select} >
                    <option value="filter">Filter by activity</option>
                    <option value="All">All</option>
                    {activitiesNoRepeat && activitiesNoRepeat.map(a =>
                        <option key={a.id} value={a.name}>{a.name}</option>
                    )}
                </select>
            </div>
        </div>
    )
}

export default Nav;