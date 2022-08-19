
import Card from './Card'
import classes from './RenameModal.module.css'

const ErrorModal=props=>{

    return <div className={classes.backdrop}  onClick={props.onNotDelete} >
<Card className={classes.modal}>
<header className={classes.header}>
<h2>{props.title}</h2>
</header>
<div className={classes.content}>
    <p>{props.message}</p>
</div>
<footer className={classes.actions}>
<button className={classes.button} onClick={()=>props.onDelete(props.text)}>Yes</button>
<button  className={classes.button}  onClick={props.onNotDelete}>No</button>
</footer>
</Card>
    </div>
}

export default ErrorModal










//backdrop artki fon modalkanin art jagindagi background