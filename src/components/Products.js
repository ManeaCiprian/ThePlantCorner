import { collection, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../config/Config'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #A3D383;
    padding: 5px 20px;
    border-radius: 7px;
    outline: 0;
    cursor: pointer;
    font-weight: bold;
`

export const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const q = query(collection(db, 'products'))
    onSnapshot(q, (querySnapshot) => {
      setProducts(querySnapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <table>
      <div className='products-container'>
        {products.map(p => {
          return <div className='product-card' key={p.idProdus}>
            <div className='product-name'>
              {p.name}
            </div>
            <div className='product-price'>
              {p.price}
            </div>
            <div className='product-img'>
              <img src={p.image} alt="not found" />
            </div>
            <Button className='addcart-btn' >Adaugă în coș</Button><Button className='favorite'>Favorite</Button>
          </div>
        })}
      </div>
    </table>
  )
}