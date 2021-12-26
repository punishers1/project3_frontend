import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, NavDropdown } from 'react-bootstrap';
import styles from "../styles/header.module.css"
export default function Header() {

  return (
    <div>
      <Container fluid>
        <Row className={styles.row}>
          <Col>
          <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Logo_of_Oslo_University_Hospital.svg/1280px-Logo_of_Oslo_University_Hospital.svg.png"/>
          </Col>
          <Col></Col>
          <Col className={ styles.colDrop}><NavDropdown className={styles.dropdown} title="Profile" >
          <NavDropdown.Item  href="myInfo/">my Info</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>{localStorage.removeItem("token");
}} href="/"> sign out</NavDropdown.Item>
          
          
        </NavDropdown></Col>
        </Row>
      </Container>
    </div>
  );
}
