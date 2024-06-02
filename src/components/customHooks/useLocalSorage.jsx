import React from "react";

function useLocalStorage(itemName,initialValue){



  const [item,setItem]=React.useState(initialValue) 
  const [loading,setLoading]=React.useState(true)
  const [error,setError]=React.useState(false)

    
  React.useEffect(()=>{

setTimeout(()=>{


  try{
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
      parsedItem = initialValue;
      localStorage.setItem(itemName, JSON.stringify([]));
    } else {
      parsedItem = JSON.parse(localStorageItem);
      setItem(parsedItem)
    }
  }
  catch(error){

    setError(true)
    setLoading(false)
  }
    setLoading(false);
},2000)
  })
  
  


    const saveItem = (newItem) => {
      localStorage.setItem("ToDo_v1", JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return{

      item,
      saveItem, 
      loading,
      error
    }
  }
  export default useLocalStorage