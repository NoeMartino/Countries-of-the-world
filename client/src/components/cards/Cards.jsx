import Card from "../card/Card";
import style from "../cards/Cards.module.css";
import { useState, useEffect } from "react";

const Cards = (props) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
          setTimeout(() => {
            setLoading(false)  
          }, 1000)
      }, []);

    return(
        <div className={style.container}>
            {loading ?
            <img className={style.imageLoading} src={process.env.PUBLIC_URL + "/loader.gif"} alt="Loading"></img>
            : (props.currentCountries.map( c =>
                <Card key={c.id}
                id={c.id}
                flag= {c.flag}
                name= {c.name}
                continent= {c.continent}
                population= {c.population}
                />))}
        </div>
    )
}

export default Cards;