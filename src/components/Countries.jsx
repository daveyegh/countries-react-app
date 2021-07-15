import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

import './Countries.css'

import Country from "./Country"


function Countries() {
    let [countries, setCountries] = useState([])
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all').then(res => {setCountries(res.data)}) 
    }, [])
    console.log(countries)
    return (
        <div className="CountriesList">
            {
               countries.map(country => {
                   return <Country name={country.name} flag={country.flag} capital={country.capital} />
               })
            }
        </div>
    )
}

export default Countries