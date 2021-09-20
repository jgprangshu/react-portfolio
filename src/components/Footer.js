import React from 'react'
import styled from 'styled-components'
import FooterCol from './FooterCol'
import PText from './PText'

const FooterStyle = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container{
        display: flex;
        gap: 3rem;
    }
    .footer_col1{
        flex:2;
    }
    .footer_col2,
    .footer_col3,
    .footer_col4,{
        flex:1;
    }
    .footer_col1_title{
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright{
        background-color: var(--deep-bg);
        text-align: left;
        padding: 1rem 0;
        margin-top: 5rem;
        .para{
            margin-left: 0;
        }
    }
    @media only screen and (max-width:768px){
        .container{
            flex-direction: column;
            gap: 0rem;
            & > div{
                margin-top: 5rem;
            }
        }
        .footer_col1 .para{
            max-width: 100%;
        }
        .copyright{
            .container{
                div{
                    margin-top:0;
                }
            }
        }
    }
    
`;


export default function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footer_col1">
                   <h1 className="footer_col1_title">Prangshu Gogoi</h1>
                   <PText>
                       I am a web developer from India. Serving clients both
                       as part of professional firm as well as a freelancer, always 
                       working to bring out the best possible outcome for clients!
                   </PText> 
                </div>

                <div className="footer_col2">
                    <FooterCol
                      heading="Important Links"
                      links={[
                          {
                              title:"Home",
                              path:"/",
                              type:"link"
                          },
                          {
                            title:"About",
                            path:"/about",
                            type:"link"
                          },
                          {
                            title:"Projects",
                            path:"/projects",
                            type:"link"
                          },
                          {
                            title:"Contact",
                            path:"/contact",
                            type:"link"
                          }
                        ]}
                    />
                </div>
                <div className="footer_col3">
                    <FooterCol
                    heading="Contact Info"
                    links={[
                        {
                            title:"+91 7002283242",
                            path:"tel:+91 7002283242"
                        },
                        {
                            title:"prangshu28@gmail.com",
                            path:"mailto:prangshu28@gmail.com"
                        },
                        {
                            title:"Mumbai, India",
                            path:"http://google.com/maps"
                        }
                        
                        ]}/>
                </div>
                <div className="footer_col4">
                    <FooterCol
                    heading="Social Links"
                    links={[
                        {
                            title:"Linkedin",
                            path:"https://www.linkedin.com/in/prangshu-gogoi/"
                        },
                        {
                            title:"Medium",
                            path:"https://jgprangshu04.medium.com/"
                        }]}/>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                  <PText>© 2020-21 :  Designed By Prangshu Gogoi </PText>
                </div>
            </div>
        </FooterStyle>
    )
}
