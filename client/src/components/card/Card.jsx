import { Link } from 'react-router-dom';
import style from "../card/Card.module.css";

const Card = ({ id, flag, name, continent, population }) => {
    return (
        <div className={style.card}>
            <div className={style.infoContainer}>
                <Link className={style.link} to={`/detail/${id}`}><h2>{name}</h2></Link>
                <h3 className={style.text} >{continent}</h3>
                <p className={style.p} >Population: {population}</p>
            </div>
            <div className={style.imageContainer}>
                <Link className={style.link} to={`/detail/${id}`}><img className={style.image} src={flag} alt={name} /></Link>
            </div>
        </div>
    )
}

export default Card;