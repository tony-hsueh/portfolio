import './App.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsMedium, BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { portfolios } from './portfolioDb';
import MyNavbar from './component/Navbar';

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <MyNavbar />
      <section className='banner'>
        <Container>
          <Row className='justify-content-center text-center'>
            <Col lg={6}>
              <h1>
                哈囉, 我叫薛少康 <br/>
                是一名前端工程師
              </h1>
              {/* <Button className='mt-3' variant="primary">About me</Button> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className='portfolio py-5'>
        <Container>
          <h2 className='mb-3'>我的作品</h2>
          <Row>
            {portfolios.map((portfolio, index) => {
              if (index < 3) {
                return(
                  <Col md={6} lg={4} key={portfolio.name + index}>
                    <Card className='portfolio-card'>
                      <Card.Img className='card-img' variant="top" src={portfolio.imageSrc} />
                      <Card.Body>
                        <Card.Title>{portfolio.name}</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <a className='stretched-link' href={portfolio.url} target='_blank' rel='noreferrer'> </a>
                      </Card.Body>
                    </Card>
                </Col>
                )
              } 
              return false
            }
            )}
            <Button className='mt-3' variant="primary" onClick={() => {navigate('/portfolios')}}>查看所有</Button>
          </Row>
        </Container>
      </section>
      <section className='about'>
        <Container>
          <h2 className='mb-3 about-title'>關於我</h2>
          <Row className='justify-content-between'>
            <Col lg={6}>
              <h5 className='personal-desc'>
                2021年底，我進入了寫程式的世界，在前端養成班的過程中我漸漸喜歡上「創造」的感覺。<br/><br/>
                以前端工程師進入職場後，我也會在 medium 分享一些自己遇到過的難題或經驗，希望未來
                跟我有相同情況的人，可以更快速的找到解答。<br/><br/>
                工作之餘，我很喜歡唱歌與聽音樂，偶爾也會去一些餐廳享受美食。
              </h5>
            </Col>
            <Col lg={5} className='timeline-wrap'>
              <div className='job-wrap'>
                <div className="job">
                  <h3>方碼科技</h3>
                  <ol>
                    <li>架設抽獎網站</li>
                    <li>優化網站萬人報到的速度10倍</li>
                    <li>維護/更新活動後台系統</li>
                  </ol>
                </div>
                <div className="job">
                  <h3>百岳國際股份有限公司</h3>
                  <ol>
                    <li>製作清大、政大、交通部徵稿、露營電商平台等等的網站切版</li>
                    <li>處理跨瀏覽相容、優化SEO、頁面互動改寫</li>
                  </ol>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className='deco'></div>
        <div className='deco1'></div>
      </section>
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
    </div>
  );
}

export default App;
