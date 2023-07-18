import { Link } from 'react-router-dom';
import style from "../welcome/Welcome.module.css"

const Welcome = () => {
    return(
        <div>
            <h1 className={style.title}>Welcome to</h1>
            <h1 className={style.title2}>Countries of the world</h1>
            <h2 className={style.subtitle}>Discover and learn</h2>
            <Link className={style.links} to= "/home" ><button className={style.buttonStart}>START</button></Link>
        </div>
    )
}

export default Welcome;