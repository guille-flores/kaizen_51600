import { getDocs, collection, query, where } from '@firebase/firestore';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig.js';
import ItemList from '../ItemList/ItemList.jsx';
import { ClipLoader } from "react-spinners";
import { Box } from '@mui/material';
import { products } from '../../productsMock.js';

import { addDoc } from "firebase/firestore"; 


const ItemListContainer = ({greeting}) => {

// Add a new document with a generated id.
  /*
  products.map((product)=>{
    addDoc(collection(db, "products"), {
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      img: product.img,
      stock: product.stock
    })
  })
  */
  const { categoryid } = useParams();
 
  const [items, setItems] = useState([])

  useEffect(()=>{

    const itemsCollection = collection(db, "products")
    let q = query(itemsCollection, where("category", "!=", null))
    if(categoryid){
      q = query(itemsCollection, where("category", "==", categoryid))
    }
    getDocs(q)
      .then((res)=> {
        let products = res.docs.map((product)=>{
          return {
            ...product.data(),
            id: product.id
            }
          })
          setItems(products)
      })
    
    /*
    const filteredProduct = products.filter( (product) => product.category === categoryid)
    const productList = new Promise((resolve, reject)=>{
      resolve(categoryid ? filteredProduct : products)
    })
    productList
      .then((res)=>{setItems(res)})
      .catch((e)=>console.log(e))
    */
    
  }, [categoryid])


  if(items.length === 0 ){
    return (
      <Box sx={{
        width: '100vw',
        height: '100vh'
        }}>
        <ClipLoader
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="green"
        />
    </Box>
    )
  }

  return (
    <ItemList items={items}/>   
  )
}

export default ItemListContainer