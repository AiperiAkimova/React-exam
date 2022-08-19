import Card from "../UI/Card";
import ItemList from "./ItemList";
import classes from './ItemList.module.css'

const Items = (props) => {
  return (
    <Card className={classes.input}>
      {props.items.map((el) => {
        return <ItemList key={el.id} text = {el.text}/>;
      })}
    </Card>
  );
};
export default Items;
