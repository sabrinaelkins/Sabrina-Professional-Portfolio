import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
// import { Github } from 'react-icons/';
// import img1 from '';
// import img2 from '';
// import img3 from '';


const Project = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Hotel Raven',
      description: 'Front-end Group Project',
      deployedUrl: 'https://smashercoder.github.io/hotel-raven/',
      gitHubRepo: 'https://github.com/SmasherCoder/hotel-raven'
    },
    {
      id: 2,
      title: 'Rough Stock Rodeo',
      description: 'Full Stack Group Project',
      deployedUrl: 'https://rough-stock-rodeo.herokuapp.com/',
      gitHubRepo: 'https://github.com/kanellakise/roughStockRodeo-Group7-Project2'
    },
    {
      id: 2,
      title: 'Marvelous',
      description: 'MERN Group Project',
      deployedUrl: 'https://marvelous-mern.herokuapp.com/',
      gitHubRepo: 'https://github.com/taylorkeltgen/marvelous'
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
                  {/* <Github /> */}
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