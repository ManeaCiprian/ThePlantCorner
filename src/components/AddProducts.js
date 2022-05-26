import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { db } from '../config/Config'
import { addDoc, collection } from "firebase/firestore"

const Button = styled.button`
    background-color: #A3D383;
    padding: 5px 20px;
    border-radius: 7px;
    outline: 0;
    cursor: pointer;
    font-weight: bold;
`
export const AddProducts = () => {
    const [numeProdus, setNumeProdus] = useState('');
    const [pretProdus, setPretProdus] = useState(0);
    const [imgProdus, setImgProdus] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png','image/jpeg','image/jpg'];

    const produsImgHandler = (e) =>{
        let selectedFile = e.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)){
            setImgProdus(selectedFile);
            setError('');
        }else{
            setImgProdus(null);
            setError('Adaugă o imagine de tipul jpg, jpeg sau png!');
        }
    }

    const adaugaProdus = (e) => {
        const products = collection(db, 'products')
        return addDoc(products,{
            name: numeProdus,
            price:pretProdus,
            image: URL.createObjectURL(imgProdus)
        }).catch(err => setError(err.message))
    }
    

    return(
        <div className='container'>
            <br />
            <h2>Adaugă produse</h2>
            <hr />
            <form autoComplete='off' className='form-group' onSubmit={adaugaProdus}>
                <label htmlFor='nume-produs'>Nume produs</label>
                <br />
                <input type={'text'} className='form-control'required
                    onChange={(e)=>setNumeProdus(e.target.value)} value={numeProdus}/>
                <label htmlFor='pret-produs'>Prețul produsului</label>
                <br />
                <input type={'number'} className='form-control'required
                    onChange={(e)=>setPretProdus(e.target.value)} value={pretProdus}/>
                <br />
                <label htmlFor='imagine-produs'>Imaginea produsului</label>
                <br />
                <input type={'file'} className='form-control' onChange={produsImgHandler} id='file'/>
                <br />
                <Button className='btn btn-succes btn-md mybtn'>Adaugă</Button>
            </form>
            {error&&<span>{error}</span>}
        </div>
    )
}