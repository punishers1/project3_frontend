import Layout from "../components/Mylayout"
import styles from "../styles/SignIn.module.css"
import {Container,Col,Row, Form, Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function signIn() {
    return (

        <div className={styles.page}>
     <Container>
  <Row>
    <Col sm={7}><Card  className={styles.card} style={{ width: '18rem' }}>
  
  <Card.Body className={styles.body}>
    <Card.Text><h1>Log in</h1></Card.Text>
  {/* <Card.Img className={styles.img}  src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" /> */}
  <Card.Text >
    {/* <h5 className={styles.text}>National id</h5> */}
      <input className={styles.inputs} placeholder="Ntionail Id" type="text"></input>
    </Card.Text>
    <Card.Text>
    {/* <h5 className={styles.text}>password</h5> */}
      <input className={styles.inputs} placeholder="Password" type="password"></input>
    </Card.Text>
    <Button className={styles.button}>Sign in</Button>
  </Card.Body>
</Card>
</Col>

    <Col sm={5}><img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Logo_of_Oslo_University_Hospital.svg/1280px-Logo_of_Oslo_University_Hospital.svg.png"/></Col>
  </Row>
  </Container>
     
     </div>
       
      

       
    )
}
