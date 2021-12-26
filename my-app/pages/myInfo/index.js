import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/MyInfo.module.css";
import Layout from "../../components/Mylayout";
export default function index() {
    return (
        <Layout>
<Container>
<Row className={styles.Row}>

<Col className={styles.Col}>
<h5>Name</h5>
<p>hamad</p>
</Col>
<Col className={styles.Col}>
<h5>National id</h5>
<p>1234567</p>
</Col>
<Col className={styles.Col}>
<h5>Jop</h5>
<p>admin</p>

</Col>

</Row>

</Container>

            
        </Layout>
    )
}
