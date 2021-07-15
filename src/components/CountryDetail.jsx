import axios from 'axios'
import React, {useEffect, useState} from 'react'


import './CountryDetails.css'

function CountryDetail({match}) {
    useEffect(() => {
        fetchItem();
        fetchImages();
        fetchInfo();
    }, [])
    
    const [details, setDetails] = useState({});
    const [images, setImages] = useState([]);
    const [info, setInfo] = useState({})


    const fetchItem = async () => {
        let itemName = match.params.name.toLowerCase();
        console.log(itemName)
        console.log(itemName)
        try {
            const fetchItem = await axios.get(`https://restcountries.eu/rest/v2/name/${itemName}?fullText=true`)
            const item = await fetchItem.data;
            let itemDetails = item[0];
            setDetails(itemDetails)
            console.log(itemDetails)
        } catch(e){
            console.log(e);
        }
        
    }

    const fetchImages = async () => {
        let itemName = match.params.name.toLowerCase();
        const images = await axios.get(`https://pixabay.com/api/?key=22379050-76afee7809a275b145aba340a&q=${itemName}&image_type=photo&pretty=true&per_page=10`)
        const imagesJSON = images.data;
        setImages(imagesJSON.hits)
        console.log(imagesJSON)
    }

    const fetchInfo = async () => {
        let itemName = match.params.name;
        const info = await axios.get(`http://localhost:3000/countries?name=${itemName}`)
        const infoJSON = await info.data;
        console.log(infoJSON[0])
        setInfo(infoJSON[0])
    }

    return (
        <div className="CountryDetails">
            <div className="CountryWrapper">
                <div className="left">
                    <img src={details.flag} alt="" />
                </div>
                <div className="right">
                    <div className="row">
                        <h2>Name: {details.name}</h2>
                        <h4>Capital: {details.capital}</h4>
                    </div>
                    <p>Area: {details.area}</p>
                    <p>Native Name: {details.nativeName}</p>
                    <p>Population: {details.population}</p>
                    <p>Region: {details.region}</p>
                    <p>Subregion: {details.subregion}</p>
                </div>
            </div>
            <div className="CountryInfo">
                <p className="CountryText">{info.info}</p>
            </div>
            <div className="CountryImages">
                {
                    images.map(item =>  <img className="CountryImage" src={item.largeImageURL} />)
                }
            </div>
            
        </div>
    ) 
}

export default CountryDetail