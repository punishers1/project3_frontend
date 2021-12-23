import Layout from "../../components/Mylayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Res.module.css";

export default function index() {
  return (
    <Layout>
      <Container fluid className={styles.container}>
        <Row>
          <Col sm={6} className={styles.Search}>
            <input type="text" placeholder="Search Patient" />
          </Col>
          <Col sm={6} className={styles.buttons}>
            <Button variant="success">Add visit</Button>{" "}
            <Button variant="success">Add patient</Button>{" "}
          </Col>
        </Row>
        <Row>
            <Col sm={2}></Col>
            
          <Col sm={8} className={styles.table}>
            <Card className={styles.Card1}>
              <Card.Header>Patients</Card.Header>
              <Card.Body>
                
                
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </Layout>
  );
}
