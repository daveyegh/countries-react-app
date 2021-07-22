import axios from "axios";
import React, { useEffect, useState } from "react";

import "./CountryDetails.css";

function CountryDetail({ match }) {
  useEffect(() => {
    fetchItem();
    fetchImages();
    fetchInfo();
    fetchCovidInfo();
  }, []);

  const [details, setDetails] = useState({});
  const [images, setImages] = useState([]);
  const [info, setInfo] = useState({});
  const [covidInfo, setCovidInfo] = useState({});

  const fetchItem = async () => {
    let itemName = match.params.name.toLowerCase();
    console.log(itemName);
    console.log(itemName);
    try {
      const fetchItem = await axios.get(
        `https://restcountries.eu/rest/v2/name/${itemName}?fullText=true`
      );
      const item = await fetchItem.data;
      let itemDetails = item[0];
      setDetails(itemDetails);
      console.log(itemDetails);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchImages = async () => {
    let itemName = match.params.name.toLowerCase();
    const images = await axios.get(
      `https://pixabay.com/api/?key=22379050-76afee7809a275b145aba340a&q=${itemName}&image_type=photo&pretty=true&per_page=10`
    );
    const imagesJSON = images.data;
    setImages(imagesJSON.hits);
    console.log(imagesJSON);
  };

  const fetchInfo = async () => {
    let itemName = match.params.name;
    const info = await axios.get(
      `http://localhost:3000/countries?name=${itemName}`
    );
    const infoJSON = await info.data;
    console.log(infoJSON[0]);
    setInfo(infoJSON[0]);
  };

  const fetchCovidInfo = async () => {
    let country = match.params.name.toLowerCase();
    const info = await axios.get(
      `https://covid19.mathdro.id/api/countries/${country}`
    );
    const infoJSON = info.data;
    console.log(infoJSON);
    setCovidInfo(infoJSON);
  };

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
        {images.map((item) => (
          <img className="CountryImage" src={item.largeImageURL} />
        ))}
      </div>
      <div className="CountryCovid">
          <div className="CountryCovidTop">
              <img src={'public/img/covid19_logo.png'} alt="" className="CountryCovidImg" />
              <h1 className="CountryCovidName">Covid 19 statistics for this country.</h1>
          </div>
        <div className="CountryCovidInfo">
            <div className="CountryCovidItem">
                <div className="CountryCovidColor red"></div>
                <h2 className="CountryCovidTitle">Confirmed</h2>
                <p className="CountryCovidSubtitle">{!covidInfo?.confirmed?.value ? 'No data for this country': covidInfo?.confirmed?.value}</p>
            </div>
            <div className="CountryCovidItem">
                <div className="CountryCovidColor black"></div>
                <h2 className="CountryCovidTitle">Deaths</h2>
                <p className="CountryCovidSubtitle">{!covidInfo?.deaths?.value ? 'No data for this country' : covidInfo?.deaths?.value}</p>
            </div>
            <div className="CountryCovidItem">
                <div className="CountryCovidColor green"></div>
                <h2 className="CountryCovidTitle">Recovered</h2>
                <p className="CountryCovidSubtitle">{!covidInfo?.recovered?.value ? 'No data for this country' : covidInfo?.recovered?.value}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
