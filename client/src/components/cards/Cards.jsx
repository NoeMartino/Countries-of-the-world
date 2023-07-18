import Card from "../card/Card";
import style from "../cards/Cards.module.css";

const Cards = (props) => {
    return(
        <div className={style.container}>
            {props.currentCountries.map( c =>
                <Card key={c.id}
                id={c.id}
                flag= {c.flag}
                name= {c.name}
                continent= {c.continent}
                population= {c.population}
                />)}
        </div>
    )
}

export default Cards;