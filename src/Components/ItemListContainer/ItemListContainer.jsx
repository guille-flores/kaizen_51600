import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from "../../productsMock.js";
import ItemList from '../ItemList/ItemList.jsx';

const ItemListContainer = ({greeting}) => {

  const { categoryid } = useParams();
  const filteredProduct = products.filter( (product) => product.category === categoryid)

  const [items, setItems] = useState([])
  useEffect(()=>{
    const productList = new Promise((resolve, reject)=>{
      resolve(categoryid ? filteredProduct : products)
    })

    productList
      .then((res)=>{setItems(res)})
      .catch((e)=>console.log(e))
  }, [categoryid])

  return (
    <ItemList items={items}/>   
  )
}

export default ItemListContainer