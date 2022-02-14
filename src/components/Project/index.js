import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Github } from 'react-icons/';
import img1 from '';
import img2 from '';
import img3 from '';
import img4 from '';
// import img5 from '../../assets/images/img-5.webp';

const Project = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Want To Buy',
      description: 'Full Stack Group Project',
      deployedUrl: 'https://want-to-buy.herokuapp.com/',
      gitHubRepo: 'https://github.com/taylorkeltgen/want-to-buy',
      image: img1,
    },
    {
      id: 2,
      title: 'Hotel Raven',
      description: 'Front-end Group Project',
      deployedUrl: 'https://smashercoder.github.io/hotel-raven/',
      gitHubRepo: 'https://github.com/SmasherCoder/hotel-raven',
      image: img2,
    },
    {
      id: 3,
      title: 'Robot Gladiator',
      description: 'Javascript Game',
      deployedUrl: 'https://taylorkeltgen.github.io/robot-gladiators/',
      gitHubRepo: 'https://github.com/taylorkeltgen/robot-gladiators',
      image: img3,
    },
    {
      id: 4,
      title: 'Run Buddy',
      description: 'HTML/CSS',
      deployedUrl: 'https://taylorkeltgen.github.io/run-buddy/',
      gitHubRepo: 'https://github.com/taylorkeltgen/run-buddy',
      image: img4,
    },
  ]);

  return (
    <div className="">
      <h1 className="page-title">Projects</h1>
      {projects.map((proj) => (
        <Card key={proj.id} className="d-flex bg-dark m-4 text-white">
          <Card.Img src={proj.image} alt="Card image" className="card-img" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title className="card-title">
              <a href={proj.deployedUrl} target="_blank" rel="noopener noreferrer" className="forest green mx-2">
                <h2>{proj.title}</h2>
              </a>
              <a href={proj.gitHubRepo} target="_blank" rel="noopener noreferrer" className="forest green mx-2">
                <h1>
                  <Github />
                </h1>
              </a>
            </Card.Title>
            <Card.Text>{proj.description}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      ))}
    </div>
  );
};

export default Project;