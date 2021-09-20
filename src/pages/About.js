import React from 'react'
import Button from '../components/Button'
import PText from '../components/PText'
import AboutImg from '../assets/images/about-page-img.jpeg'
import styled from 'styled-components'
import AboutInfoItem from '../components/AboutInfoItem'
import ContactBanner from '../components/ContactBanner'

const AboutStyles = styled.div`
    padding: 20rem 0 10rem 0;
    .top-section{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .left{
        flex:3;
    }
    .right{
        flex:2;
    }
    .about_subHeading{
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span{
            background-color: var(--deep-dark);
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
    .about_heading{
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
    .about_info{
        margin-bottom: 4rem;
        .para{
            max-width: 100%;
        }
    }
    .right{
        img{
            border: 2px solid var(--gray-1);
        }
    }
    .about_infoItems{
        margin-top: 15rem;
    }
    .about_info_item{
        margin-bottom: 10rem;
    }
    .about_info_heading{
        font-size: 3.6rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width:768px){
        padding: 10rem 0;
        .top-section{
            flex-direction: column;
            gap: 5rem;
        }
        .about_subHeading{
            font-size: 1.8rem;
        }
        about_heading{
            font-size: 2.8rem;
        }
        .about_info_heading{
            font-size: 3rem;
        }
    }
`;


export default function About() {
    return (
        <AboutStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about_subHeading">
                            Hi, I am <span>Prangshu G</span>
                        </p>
                        <h2 className="about_heading">
                            A MERN stack developer
                        </h2>
                        <div className="about_info">
                            <PText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </PText>
                        </div>
                        <Button btnText="Download CV" btnLink="#"/>
                    </div>

                    <div className="right">
                        <img src={AboutImg} alt="pg-dp"/>
                    </div>
                </div>
                <div className="about_infoItems">
                    <div className="about_info_item">
                        <h1 className="about_info_heading">
                            Education
                        </h1>
                        <AboutInfoItem
                         title="School"
                         items={["Vivekanda Kendra Vidyalaya, Baragolai, Assam, India"]}
                        />
                        <AboutInfoItem
                         title="College"
                         items={["University of Engineering & Management, Jaipur, Rajasthan, India"]}
                        />
                    </div>

                    <div className="about_info_item">
                        <h1 className="about_info_heading">
                            My Skills
                        </h1>
                        <AboutInfoItem
                         title="Frontend"
                         items={["HTML","CSS","SASS","React","Redux"]}
                        />
                        <AboutInfoItem
                         title="Backend"
                         items={["Node","Nest","Express"]}
                        />
                        <AboutInfoItem
                         title="Others"
                         items={["AWS","React Native","Figma"]}
                        />
                    </div>
                </div>
            </div>
            <ContactBanner/>
        </AboutStyles>
    )
}
