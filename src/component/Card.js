import React from 'react'
import Card from 'react-bootstrap/Card';
import './Card.css'

const MyCard = ({portfolio}) => {
  return (
    <Card className='portfolio-card'>
      <Card.Img className='card-img' variant="top" src={portfolio.imageSrc} />
      <Card.Body>
        <Card.Title>{portfolio.name}</Card.Title>
        <a className='stretched-link' href={portfolio.url} target='_blank' rel='noreferrer'> </a>
      </Card.Body>
    </Card>
  )
}

export default MyCard