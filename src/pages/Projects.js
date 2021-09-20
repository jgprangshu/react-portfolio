import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import ProjectItem from '../components/ProjectItem'
import {MdSearch} from 'react-icons/md'
import ProjectInfo from '../assets/data/projects'

const ProjectsStyle = styled.div`
    padding: 10rem 0;
    .projects_allItems{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 5rem;
        margin-top: 5rem;
    }
    .projects_searchBar{
        position: relative;
        width: 300px;
        margin-top: 5rem;
    }
    .projects_searchBar input{
        width: 100%;
        font-size: 2rem;
        padding: .8rem;
        color: var(--black);
        border-radius: 6px;
        outline: none;
        border: none;
    }
    .projects_searchBar .searchIcon{
        position: absolute;
        width: 2rem;
        right: 1rem;
    }
    .projects_searchBar .searchIcon path{
        color: var(--deep-dark);
    }
    @media only screen and (max-width:768px){
        .projects_searchBar,
        .projects_searchBar input,
        .projects_searchBar form{
            width: 100%
        }
    }
`;


export default function Projects() {
    const [projectData, setProjectData] = React.useState(ProjectInfo);
    const [searchText, setsearchText] = React.useState('');

    React.useEffect(()=>{
      if(searchText ==='') return;
      setProjectData(()=>{
         return ProjectInfo.filter(item => item.name.toLowerCase().match(searchText.toLowerCase()));
      })
    },[searchText])

    function handleChange(e){
        e.preventDefault();
        setsearchText(e.target.value);
        if(!e.target.value.length > 0){
            setProjectData(ProjectInfo);
        }
    }

    return (
        <ProjectsStyle>
           <div className="container">
               <SectionTitle heading="projects"
               subHeading="My works!"/>
               <div className="projects_searchBar">
                   <form>
                       <input type="text" value={searchText}
                        onChange={handleChange}
                        placeholder="Project Name"/>
                       <MdSearch className="searchIcon"/>
                   </form>
               </div>
               <div className="projects_allItems">
                   {projectData.map((project)=>(
                      <ProjectItem key={project.id}
                        title={project.name}
                        desc={project.desc}
                        img={project.img}
                      />
                   ))}
               </div>
           </div>
        </ProjectsStyle>
    )
}
