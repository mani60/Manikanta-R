import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SiGithub } from 'react-icons/si';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .cont{
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: 1em;    
  }
  .livebtn{
    font-size: 2.2rem;
    padding: 0.7em 1em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: green;
    
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
    .livebtn {
      font-size: 1.8rem;
    }
  }
`;

export default function ProjectItem({
  img = '',
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  url = ''
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="/projects">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
      <div className="cont">
        <a className="livebtn" href={url} target="_blank"><SiGithub color='#333333'/></a>
      </div>
    </ProjectItemStyles>
  );
}
