import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardSubtitle, CardBody, CardText, CardLink, Button  } from 'reactstrap';

import './Country.css'

function Country(props) {
 
    return (
        <div className="Country" key={props.numericCode}>
            {/* <Link  to={`countries/${props.name}`}>
                <img src={props.flag} alt="" className="Country-img" />
                <h5>{props.name}</h5>
                <p>{props.capital}</p>
            </Link> */}
            
                  <Card style={{padding: 10}}>
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
        </CardBody>
        <img  width="100%" src={props.flag} alt={props.name + '\'s flag'} title={props.name + '\'s flag'} />
        <CardBody>
          <Link to={`countries/${props.name}`}><Button color="primary">Show More</Button></Link>
        </CardBody>
      </Card>
        </div>
    )
}

export default Country;