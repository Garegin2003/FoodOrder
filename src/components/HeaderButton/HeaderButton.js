import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../CartIcon/CartIcon"
import classes from './HeaderButton.module.css'

const HeaderButton = props => {
    const [btnIsHighlighted, setBtnIsHighLighted] = useState(false)
    const cartCtx = useContext(CartContext)
    
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const { items } = cartCtx

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) return
        setBtnIsHighLighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return <button className={btnClasses} onClick= {props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderButton
