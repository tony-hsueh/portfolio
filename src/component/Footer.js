import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsMedium, BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className='justify-content-center'>
            <Col>
              <div className='logo--footer'>
                <img src='/logo.png' alt='logo'/>
              </div>
              <h4 className='footer-desc'>如果您喜歡我的作品，可透過下方聯絡資訊聯繫我</h4>    
              <div className='gap-line'></div>
              <div className='social-link-wrap'>
                <a 
                  href='https://medium.com/@yahooleo36'
                  target='_blank'
                  className='social-link'
                  rel='noreferrer'
                >
                 <BsMedium  />
                </a>
                <a 
                  href='mailto: yahooleo36@gmail.com'
                  target='_blank'
                  className='social-link'
                  rel='noreferrer'
                >
                  <SiGmail />     
                </a>
                <a 
                  href='https://github.com/tony-hsueh'
                  target='_blank'
                  className='social-link'
                  rel='noreferrer'
                >
                  <BsGithub />    
                </a>           
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
  )
}

export default Footer