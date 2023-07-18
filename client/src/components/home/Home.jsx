import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { getCountriesOrder } from "../../redux/actions";
import Nav from "../nav/Nav";
import Cards from "../cards/Cards";
import Paged from "../paged/Paged";
import style from "../home/Home.module.css";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesOrder())
  }, [dispatch])

  const countries = useSelector((state) => state.countriesCopy);

  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(10)
  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className={style.background}>
      <Nav paged={paged}/>
      {countries.length ? <Cards currentCountries={currentCountries}/>
      : <img className={style.imageLoading} src={process.env.PUBLIC_URL + "/loader.gif"} alt="Loading"></img>}
      <Paged currentPage={currentPage}
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        paged={paged} />
    </div>
  )
}

export default Home;