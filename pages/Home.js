import React from 'react'
import './pages.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
  return (
    <div>
         <div className="square-box3"></div>;
         <div className="square-box4"></div>;

      <div className="square-box"></div>;
      <div className="square-box2"></div>;
   

  <div >
  <img className='books' src="https://www.freepnglogos.com/uploads/book-png/old-books-png-transparent-Images-0.png" alt="books" style={{width:'30%',marginTop:'8%', marginRight:'50%',}} />

  <div>
  <p className='name'>Book's Paradise</p>
  </div>
  </div>

  <p className='select'>Select Your Genre.</p>
<Container style={{marginTop:'2%' }}>
      <Row >
        <Col  md={6}><div className="container" >
          
        <a href="/Horor"><div data-text="HORROR" style={{ "--r": "-15" }} className="glass">
    <span viewBox="0 0 496 512" height="1em" >
     
      <path><img src="https://cdn-icons-png.flaticon.com/512/3507/3507934.png" alt="books" style={{width:'30%',marginTop:'8%', marginRight:'50%',}} /></path>
      
    </span>
  </div></a>

   
  <a href="/Romance">
  <div data-text="ROMANCE" style={{ "--r": "5" }} className="glass">
  <span viewBox="0 0 496 512" height="1em" >
      <path><img src="https://cdn-icons-png.flaticon.com/512/2560/2560343.png" alt="books" style={{width:'30%',marginTop:'8%', marginRight:'50%',}} /></path>
    </span>
  </div>
  </a>
     
  <a href="/Fiction">
  <div data-text="FICTION" style={{ "--r": "25" }} className="glass">
  <span viewBox="0 0 496 512" height="1em" >
      <path><img src="https://cdn-icons-png.flaticon.com/512/2178/2178121.png" alt="books" style={{width:'30%',marginTop:'8%', marginRight:'50%',}} /></path>
    </span>
  </div>
  </a>
</div>
</Col>
        <Col  xs={6} ><div className="container">
           
        <a href="/Computing">
            <div data-text="COMPUTING" style={{ "--r": "-15" }} className="glass">
  <span viewBox="0 0 496 512" height="1em" >
      <path><img src="https://cdn-icons-png.flaticon.com/512/4264/4264850.png" alt="books" style={{width:'30%',marginTop:'8%', marginRight:'50%',}} /></path>
    </span>
  </div>
  </a>
  <a href="/History">
  <div data-text="HISTORY" style={{ "--r": "5" }} className="glass">
  <span viewBox="0 0 496 512" height="1em" >
      <path><img src="https://icon-library.com/images/history-icon/history-icon-7.jpg" alt="books" style={{width:'30%',marginTop:'8%', marginRight:'50%',}} /></path>
    </span>
  </div>
  </a>
  <a href="/Drama">
  <div data-text="DRAMA" style={{ "--r": "25" }} className="glass">
  <span viewBox="0 0 496 512" height="1em" >
      <path><img src="https://www.freeiconspng.com/thumbs/theater-icon/comedy-drama-masks-theater-theatre-icon--5.png" alt="books" style={{width:'30%',marginTop:'8%', marginRight:'50%',}} /></path>
    </span>
  </div>
  </a>
  
</div>


</Col>
      </Row>

    </Container>

    <p className='prg'>Whether you're into thrillers that keep you on the edge of your seat <br/>or literary classics that stir the soul,<br/> our extensive database ensures there's something for everyone.<br/> Explore curated lists, discover hidden gems, </p>

    </div>
  )
}

export default Home