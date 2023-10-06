import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyNavbar from './component/Navbar';
import { portfolios } from './portfolioDb';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <MyNavbar />
      <section className='banner'>
        <Container>
            <h2 className='mb-3'>我的作品</h2>
            <Row>
              {portfolios.map((portfolio, index) => (
                <Col md={6} lg={4} key={portfolio.name + index}>
                  <Card className='portfolio-card'>
                    <Card.Img className='card-img' variant="top" src={portfolio.imageSrc} />
                    <Card.Body>
                      <Card.Title>{portfolio.name}</Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text> */}
                      <a className='stretched-link' href={portfolio.url} target='_blank' rel='noreferrer'> </a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
      </section>
    </div>
  )
}

export default Portfolio