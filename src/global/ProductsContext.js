import React from "react";
import { createContext } from "react";
import { db } from "../config/Config";
import { collection, onSnapshot, query } from 'firebase/firestore'

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component{
    state = {
        products: []
    }
  
    componentDidMount(){
        const q = query(collection(db, 'products'));
        const prevProducts = this.state.products;
        onSnapshot(q, (querySnapshot) =>  {
            let changes = querySnapshot.docChanges();
            changes.forEach(change => {
                if(change.type==='added'){
                    prevProducts.push({
                        id: change.doc.id,
                        name: change.doc.data().numeProdus,
                        price: change.doc.data().pretProdus,
                        image: change.doc.data().imgProdus
                    })
                }
                this.setState({
                    products: prevProducts
                })
            })
        })
    }

    render(){
        return(
            <ProductsContext.Provider value={{products:[...this.state.products]}}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}