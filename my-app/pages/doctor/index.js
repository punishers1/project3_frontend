import Layout from "../../components/Mylayout";
import styles from "../../styles/Dor.module.css";
import { Container, Col, Row, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function index() {
  return (
    <Layout className={styles.Body}>
      <Container>
        <Row>
          <Col className={styles.col}>
          <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <Card.Body>
                  <form class="row g-3">
                      <div class="col-md-4">
                  <label className="lab"> drTreatment</label>
                  <input type="text" className="lab"/><br/>
                  <label className="lab">  diagnose </label>
                  <input type="text" className="lab"/><br/>
                  <label className="lab">drNotes</label>
                  <input type="text" className="lab"/><br/>

                  <label for="lab">Checked by Doctor</label>
                  <h5> True <input type="checkbox"/></h5>
                  <h5> False <input type="checkbox"/></h5>
                  </div>
                  </form>
                  <input/>
                  


               
                                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
