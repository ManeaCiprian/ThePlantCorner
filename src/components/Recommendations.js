import React from 'react'
import monstera from '../images/Monstera.jpg'
import epiphyllum from '../images/Epiphyllum.jpg'
import pomul_de_aur from '../images/pomul_de_aur.jpg'
import bromelia from '../images/Bromelia.jpg'
import azalee from '../images/Azalee.jpg'
import alocasia from '../images/Alocasia.jpg'
import ficus from '../images/Ficus.jpg'
import crin from '../images/Crin.jpg'
import thuja from '../images/Thuja.jpg'
import clematita from '../images/Chlematita.jpg'
import magnolie from '../images/Magnolie.jpg'
import iasomie from '../images/Iasomie.jpg'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #A3D383;
    padding: 5px 20px;
    border-radius: 7px;
    outline: 0;
    cursor: pointer;
    font-weight: bold;
`


export const Recommendations = () => {
    
    const data ={
    
        "plante" :[
          {
            "Nume":"Epiphyllum",
            "Tip_planta":"Tip planta: apartament",
            "Inaltime":"Inaltime: 1.5m",
            "Lumina":"Lumina: difuză",
            "Temperatura_ideala":"Temperatura ideala: 20-25",
            "Udare":" Udare: de 2 ori pe luna",
            "Imagine":monstera
          },
          {
            "Nume":"Monstera",
            "Tip_planta":"Tip planta: apartament",
            "Inaltime":"Inaltime: 3m",
            "Lumina":"Lumina: partial insorit",
            "Temperatura_ideala":"Temperatura ideala: 18-22",
            "Udare":"Udare: de 4 ori pe luna",
            "Imagine":epiphyllum
          },
          {
            "Nume":"Pomul de aur",
            "Tip_planta":"Tip planta: apartament-gradina",
            "Inaltime":"Inaltime: 2-2.5m",
            "Lumina":"Lumina: partial insorit",
            "Temperatura_ideala":"Temperatura ideala: 10-20",
            "Udare":"Udare: de 4-5 ori pe luna",
            "Imagine":pomul_de_aur
          },
          {
            "Nume":"Bromelia",
            "Tip_planta":"Tip planta: apartament",
            "Inaltime":"Inaltime: 50cm",
            "Lumina":"Lumina: umbra/semi-umbra",
            "Temperatura_ideala":"Temperatura ideala: 18-22",
            "Udare":"Udare: la 4-5 zile",
            "Imagine":bromelia
          },
          {
            "Nume":"Azalee",
            "Tip_planta":"Tip planta: apartament-gradina",
            "Inaltime":"Inaltime: 40-50cm",
            "Lumina":"Lumina: partial insorit",
            "Temperatura_ideala":"Temperatura ideala: 15-20",
            "Udare":"Udare: la 4-5 zile",
            "Imagine":azalee
          },
          {
            "Nume":"Alocasia",
            "Tip_planta":"Tip planta: apartament",
            "Inaltime":"Inaltime: 1.5-2m",
            "Lumina":"Lumina: partial insorit",
            "Temperatura_ideala":"Temperatura ideala: 15-25",
            "Udare":"Udare: 1 data pe saptamana",
            "Imagine":alocasia
          },
          {
            "Nume":"Ficus",
            "Tip_planta":"Tip planta: apartament",
            "Inaltime":"Inaltime: 1-1.5m",
            "Lumina":"Lumina: Ferit de soare",
            "Temperatura_ideala":"Temperatura ideala: 15-24",
            "Udare":"Udare: 1 data la 2 saptamani",
            "Imagine":ficus
          },
          {
            "Nume":"Crinul pacii",
            "Tip_planta":"Tip planta: apartament",
            "Inaltime":"Inaltime: 0.6-1m",
            "Lumina":"Lumina: Loc umbros",
            "Temperatura_ideala":"Temperatura ideala: 15-35",
            "Udare":"Udare: 1 data pe saptamana",
            "Imagine":crin
          },
          {
            "Nume":"Thuja",
            "Tip_planta":"Tip planta: gradina",
            "Inaltime":"Inaltime: 2-3m",
            "Lumina":"Lumina: raze directe ale soarelui",
            "Temperatura_ideala":"Temperatura ideala: 0-30",
            "Udare":"Udare: de 2 ori pe saptamana",
            "Imagine":thuja
          },
          {
            "Nume":"Clematita",
            "Tip_planta":"Tip planta: gradina",
            "Inaltime":"Inaltime: 20-30cm",
            "Lumina":"Lumina: loc umbros",
            "Temperatura_ideala":"Temperatura ideala: 15-23",
            "Udare":"Udare: de 3-4 ori pe saptamana",
            "Imagine":clematita
          },
          {
            "Nume":"Magnolie",
            "Tip_planta":"Tip planta: gradina",
            "Inaltime":"Inaltime: 3-4m",
            "Lumina":"Lumina: lumina abundenta",
            "Temperatura_ideala":"Temperatura ideala: 10-16",
            "Udare":"Udare: 1 data la 2-3 saptamani",
            "Imagine":magnolie
          },
          {
            "Nume":"Iasomie",
            "Tip_planta":"Tip planta: gradina",
            "Inaltime":"Inaltime: 2-3m",
            "Lumina":"Lumina: lumina abundenta",
            "Temperatura_ideala":"Temperatura ideala: 18-26",
            "Udare":"Udare: 1 data la 1-2 saptamani",
            "Imagine":iasomie
          },
        ],
    
        "format":{"last_name":"Last Name"}
      }

    return(
        <div className='shop'>
              <div className='button-home'>
            <Link to='/' className='home'><Button type='home'>Acasă</Button></Link>
            </div>
          <table>
      <div className='products-container'>
        {data.plante.map((item,i) => {
          return <div className='product-card' key={i}>
            <div className='product-name'>
              {item.Nume}
            </div>
            <div className='product-temp'>
              {item.Tip_planta}
            </div>
            <div className='product-temp'>
              {item.Inaltime}
            </div>
            <div className='product-temp'>
              {item.Lumina}
            </div>
            <div className='product-temp'>
              {item.Temperatura_ideala}
            </div>
            <div className='product-temp'>
              {item.Udare}
            </div>
            <div className='product-img'>
              <img src={item.Imagine}/>
            </div>
          </div>
        })}
      </div>
    </table>
  

        </div>

    )
}