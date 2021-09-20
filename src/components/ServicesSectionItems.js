import React from 'react'
import {MdDesktopMac} from 'react-icons/md'
import styled from 'styled-components';
import PText from './PText';

const ServicesItemStyle = styled.div`
    text-align: center;
    .servicesItem_Icon{
        svg{
            width: 3rem;
        }
    }
    .servicesItem_Title{
        font-size: 2.5rem;
        font-family: 'Montserrat SemiBold';
    }
    .para{
        margin-top: 2rem;

    }
`;

export default function ServicesSectionItems({
    icon= <MdDesktopMac/>,
    title= "Web Design",
    description= " Lorem Ipsum dummy"
}) {
    return (
        <ServicesItemStyle>
           <div className="servicesItem_Icon"> {icon}</div>
            <div className="servicesItem_Title"> {title}</div>
               <PText>
                   {description}
               </PText>
           
        </ServicesItemStyle>
    )
}
