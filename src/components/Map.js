import React from 'react'
import styled from 'styled-components'
import PText from './PText'
import MapImage from '../assets/images/map1.PNG'

const MapStyle = styled.div`
    background: url(${MapImage}) no-repeat center / cover;
    min-height: 400px;
    .container{
        position: relative;
        min-height: 400px;
    }
    .map_card{
        position: absolute;
        right: 10%;
        bottom: 10%;
        padding: 2rem;
        background: var(--deep-dark);
        width: 100%;
        max-width: 300px;
        border-radius: 12px;
    }
    .map_card_heading{
        font-sixe: 3rem;
        margin-bottom: 1rem;
    }
    .map_card_link{
        display: inline-block;
        font-size: 1.6rem;
        margin-top: 3rem;
        text-decoration: underline;
    }
    @media only screen and (max-width: 768px){
        background-position: 80% center; 
    }
    @media only screen and (max-width: 400px){
        .map_card{
            max-width: none;
            right: auto;
        }
    }
`;

export default function Map() {
    return (
        <MapStyle>
           <div className="container">
               <div className="map_card">
                    <h3 className="map_card_heading">Here is me</h3>
                    <PText>Mumbai, Maharashtra, India</PText>
                    <a href="https://www.google.com/maps/place/Airoli,+Navi+Mumbai,+Maharashtra+400708/@19.1592173,72.9596946,13z/data=!3m1!4b1!4m13!1m7!3m6!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!2sMumbai,+Maharashtra!3b1!8m2!3d19.0759837!4d72.8776559!3m4!1s0x3be7bf523dd8b5ab:0x9de9a7f73961da61!8m2!3d19.159114!4d72.9986572"
                     target="_blank" rel ="noreferrer" className="map_card_link"
                    >
                        Open in Google Maps
                    </a>
               </div>
           </div>
        </MapStyle>
    )
}
