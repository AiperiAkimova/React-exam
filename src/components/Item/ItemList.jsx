import { useState } from "react";
import ErrorModal from "../UI/RenameModal";
import classes from './ItemList.module.css'


const ItemList = (props) => {
  const [modalDelete, setModalDelete] = useState(false);
  const [title, setTitle] = useState(props.text)
  const deleteUserHandler = (event) => {
    event.preventDefault();
    setModalDelete({
      title: "Rename text",
    });
  };
  const onRename =() =>{
    setTitle("Hello")
  }
  const delHandler = () => {
    setModalDelete(null);
  };
  return (
    
        <div className={classes.users}>
        <ul>
        
          <li>
            {modalDelete && (
              <ErrorModal
                title={modalDelete.title}
                onNotDelete={delHandler}
                onDelete={onRename}
              />
            )}
            {title}
          </li>
          <button className={classes.button} onClick={deleteUserHandler}>Rename</button>
        
      </ul>
        </div>
     
   
  );
};
export default ItemList;
