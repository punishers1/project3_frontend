import Layout from "../../components/Mylayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Col, Container, Row , Button} from "react-bootstrap";
import styles from "../../styles/Nur.module.css";

export default function index() {
    return (
        
<Layout className={styles.body}>
    <Container >
<Row>
    <Col  >
    <Card className={styles.card} style={{ width: '18rem' }}>
  <Card.Body >
    <Card.Title>Card Title</Card.Title>
    
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.<br/>
      <br/>
      <br/>
      <br/>

     

      
     
    </Card.Text>
   
  </Card.Body>
</Card>

    </Col>
    <Col >
    <Card className={styles.form}  >
  <Card.Body>
  <form class="row g-3">
  <div class="col-md-4">
   
    <label for="inp">temperature</label>
    <input type="text" class="inp" />
    <br/>
    <label for="inp">bp</label>
    <input type="text" class="inp" />
    <br/>
    <label for="inp">weight</label>
    <input type="text" class="inp" />
    <br/>
    <label for="inp">heartRate</label>
    <input type="text" class="inp" />
    <br/>
   
    <label for="inp">Checked by Nurse </label>
    <h5>True <input type="checkbox"/></h5>
    <h5>False <input type="checkbox"/></h5>
    


  </div>
</form>
</Card.Body>
</Card>
    </Col>
  </Row>
</Container>
</Layout>

       
    )
}
