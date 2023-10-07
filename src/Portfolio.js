import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './component/Navbar';
import MyCard from './component/Card';
import Footer from './component/Footer';
import { portfolios } from './portfolioDb';
import { portfoliotype } from './commonParameter';
import './Portfolio.css'

const Portfolio = () => {
  const [filter, setFilter] = useState(portfoliotype.all)
  const toggleTab = (type) => {
    setFilter(portfoliotype[type]);
  }
  return (
    <div className='portfolio'>
      <MyNavbar />
      <section className='banner'>
        <Container>
            <h2 className='mb-3'>我的作品</h2>
            <div className='d-flex'>
              {Object.keys(portfoliotype).map((type) => (
                <div 
                  key={type}
                  className={`tab-container ${filter === portfoliotype[type] ? 'active': ''}`}
                  onClick={() => {toggleTab(type)}}
                >
                  {portfoliotype[type]}
                </div>
              ))}
            </div>
            <Row>
              {portfolios
                .filter(portfolio => {
                  if (filter === portfoliotype.all) return true
                  return portfolio.type === filter
                })
                .map((portfolio, index) => (
                  <Col md={6} lg={4} key={portfolio.name + index}>
                    <MyCard portfolio={portfolio}/>
                  </Col>
              ))}
            </Row>
          </Container>
      </section>
      <Footer />
    </div>
  )
}

export default Portfolio