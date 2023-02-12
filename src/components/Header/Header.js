import { Fragment } from "react"
import meals from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderButton from '../HeaderButton/HeaderButton'



const Header = props => {

    return <Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderButton onClick = {props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={meals} />
        </div>
    </Fragment>
}

export default Header