import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import projectImage from '../assets/images/projectImg.png'

const ProjectItemStyle = styled.div`
    .projectItem_image{
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid var(--gray-2);
        img{
            height: 100%;
        }
    }
    .projectItem_info{
        margin-top : 1rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 12px;
    }
    .projectItem_title{
        font-size: 2.2rem;
    }
    .projectItem_desc{
        font-size: 1.6rem;
        font-family: 'RobotoMono Regular';
        margin-top: 1rem;
    }
    @media only screen and (max-width:768px){
        .projectItem_image{
            height: 350px;
        }
    }
`;

export default function ProjectItem({
    img= projectImage,
    title="Project Name",
    desc="Lorem Ipsum"
}) {
    return (
        <ProjectItemStyle>
           <Link to="/projects" className="projectItem_image">
               <img src={img} alt="project Img"/>
            </Link> 
            <div className="projectItem_info">
                <Link to="#">
                    <h3 className="projectItem_title"> {title}</h3>
                </Link>
                <p className="projectItem_desc">
                    {desc}
                </p>
            </div>
        </ProjectItemStyle>
    )
}
