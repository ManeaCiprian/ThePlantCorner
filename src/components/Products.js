import { async } from '@firebase/util'
import { collection, getDocs, onSnapshot, query, setDoc } from 'firebase/firestore'
import React, { Component, useEffect } from 'react'
import {db} from '../config/Config'

export const Products = () => {
    let products = [];
    

    useEffect(() => {
        const q = query(collection(db, 'products'))
        onSnapshot(q, (querySnapshot) => {
          products=querySnapshot.docs.map(doc => doc.data())
          console.log(products);
          return(
            <div>
              
              {
              
                products.map(p=><div key={p} value={p}>asd{p.name}</div>)
              }
            </div>
        )
        })
      },[])
      
    
}