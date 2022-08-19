import "./App.css";
import { useState} from "react";

import ItemForm from "./components/Item/ItemForm";
import Items from "./components/Item/Items";

function App() {
 
 const [text, setText] = useState([])
 

 const addItemHandler =(itemText)=>{
  setText((prevState) =>{
    return(
      [...prevState, {
      text: itemText,
      id: Math.random().toString(),
    }])
    
  })
 }

 const addItems = async(items) =>{
  await fetch ("https://add-text-38628-default-rtdb.europe-west1.firebasedatabase.app/items.json", {
    method: "POST",
    body: JSON.stringify(items),
    headers:{
      "Content-type": "application/json",
    }

  })
 }
 
  return (
    <>
  
      <ItemForm onAddItem={addItemHandler} />
      <Items items={text} onAddItem={addItems} />
   
    </>
     
    
  );
}

export default App;
