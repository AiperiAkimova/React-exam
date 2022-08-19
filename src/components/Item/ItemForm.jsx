import { useState } from "react"
import Card from "../UI/Card"
import classes from './ItemList.module.css'

const ItemForm = ({onAddItem}) =>{
    const [state, setState] = useState("")
    
    const itemChangeHandler = (e) =>{
        setState(e.target.value)
    }
    const submitHandleler = (e) =>{
        e.preventDefault()
        
        onAddItem(state)
        setState("")
    }
    return(
        <Card >
        <form onSubmit={submitHandleler} className={classes.input}>
            <input type="text" value={state} onChange={itemChangeHandler} ></input>
            <button className={classes.button} type="submit">ADD</button>
        </form>
        </Card>
    )
}
export default ItemForm