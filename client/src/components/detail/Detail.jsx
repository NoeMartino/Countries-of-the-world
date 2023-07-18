import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { getCountryDetail } from "../../redux/actions";
import style from "../detail/Detail.module.css";

const Detail = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountryDetail(id))
      }, [dispatch, id])

    const countryDetail = useSelector((state) => state.countryDetail);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
          setTimeout(() => {
            setLoading(false)  
          }, 1000)
      }, []);
      
    return (
        <div>
            {loading ?
            <img className={style.imageLoading} src={process.env.PUBLIC_URL + "/loader.gif"} alt="Loading"></img>
            : Object.keys(countryDetail).length === 0 ?
                <img className={style.imageNotFound} src={process.env.PUBLIC_URL + "/notfound.png"} alt="Not found"></img>
                : <div>
                    <h1 className={style.title}>{countryDetail.name} ({countryDetail.id})</h1>
                    <div className={style.container}>
                        <div className={style.textContainer}>
                            <p className={style.text}><b>Continent:</b> {countryDetail.continent}</p>
                            {countryDetail.capital && <p className={style.text}><b>Capital:</b> {countryDetail.capital}</p>}
                            {countryDetail.subregion && <p className={style.text}><b>Subregion:</b> {countryDetail.subregion}</p>}
                            {countryDetail.area && <p className={style.text}><b>Area: </b>{countryDetail.area}</p>}
                            <p className={style.text}><b>Population:</b> {countryDetail.population}</p>
                            {countryDetail?.Activities?.length > 0 && <div><p className={style.text}><b>Activities: </b></p>
                                <ul className={style.list}>
                                    {countryDetail.Activities.map(a => <li className={style.smallText} key={a.name}>{a.name}</li>)}
                                </ul>
                            </div>}
                        </div>
                        <div className={style.imageContainer}>
                            <img className={style.image} src={countryDetail.flag} alt={countryDetail.name} />
                        </div>
                    </div>
                </div>}
            <Link to="/home" ><button className={style.button}>Back to home</button></Link>
        </div>
    )
}

export default Detail;