
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { SearchOutlined } from '@ant-design/icons';
import './nav.css'


function NavScroll() {
  return (
    <div>
                {/* // notification bar */}
    <div style={{marginBottom:'1px'}} className="notification-bar">
    <p>Welcome To Your Favorite Book Store</p>
    <p>Welcome To Your Favorite Book Store</p>
    <p>Welcome To Your Favorite Book Store</p>
  </div>

<div  >

<Navbar
  style={{
    paddingLeft: '3%',
    paddingRight: '3%',
    marginTop: '2%',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.2',
    padding: '0px 0',
    border: '2px solid rgb(217, 170, 132)',
    boxShadow:'2px 2px 2px rgb(217, 170, 132)'
  }}
  expand="lg"
  
>
  <Container fluid >
    <Navbar.Brand style={{ paddingRight: '2%' }}>
      <Nav.Link href="/">
        <b>Book's Paradise</b>
      </Nav.Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

                              {/* contact  */}


  
        <Navbar.Brand>
          <Nav.Link href="/login">
          Login
          </Nav.Link>
        
        </Navbar.Brand>
        
        <Navbar.Brand>
          <Nav.Link href="/Register">
          Register
          </Nav.Link>
        
        </Navbar.Brand>
      </Nav>
  
      <Navbar.Brand>
         
                                  {/* stars */}
          <div className="rating">
            <input type="radio" id="star-1" name="star-radio" value="star-1" />
            <label htmlFor="star-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                </svg>
            </label>
            <input type="radio" id="star-2" name="star-radio" value="star-2" />
            <label htmlFor="star-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                </svg>
            </label>
            <input type="radio" id="star-3" name="star-radio" value="star-3" />
            <label htmlFor="star-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                </svg>
            </label>
            <input type="radio" id="star-4" name="star-radio" value="star-4" />
            <label htmlFor="star-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                </svg>
            </label>
            <input type="radio" id="star-5" name="star-radio" value="star-5" />
            <label htmlFor="star-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                </svg>
            </label>
        </div>


        
        </Navbar.Brand>
   


      <Form style={{paddingRight:'5%'}} className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Nav.Link>
        <SearchOutlined style={{ paddingTop: '5%', fontSize: '32px' }} />        </Nav.Link>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
    </div>
  );
}

export default NavScroll;