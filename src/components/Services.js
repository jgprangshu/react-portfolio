import React from 'react'
import { MdCode, MdDesktopMac, MdPhonelinkSetup} from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItems from './ServicesSectionItems';

const ServicesStyle = styled.div`
    padding: 10rem 0;
    .services__allItems{
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
    }
    @media only screen and (max-width:768px){
        .services__allItems{
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }
`;

export default function Services() {
    return (
    <ServicesStyle>
        <div className="container">
            <SectionTitle heading="Services"
            subHeading="What i can do for you "/>

            <div className="services__allItems">
                <ServicesSectionItems 
                  icon={<MdDesktopMac/>}
                  title="Web UI/UX"
                  description="Eyecatching UI/UX with React/SASS/Figma/Material-UI!"
                  />
                <ServicesSectionItems
                  icon={<MdCode/>}
                  title="API development"
                  description="Creating API(s) with Node/Nest/AWS!"
                
                />
                <ServicesSectionItems
                  icon={<MdPhonelinkSetup/>}
                  title="Mobile Development"
                  description="Delivering multi platform mobile apps with React Native!"
                />
            </div>
        </div>
    </ServicesStyle>
        
    )
}
