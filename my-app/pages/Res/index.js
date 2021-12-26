import Layout from "../../components/Mylayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios"
import styles from "../../styles/Res.module.css";
import { addVisit } from "../../../../project3_backend-1/Routers/controllers/addpatient ";

export default function index() {
  const [display, setDisplay] = useState("none");
  const [display1, setDisplay1] = useState("");
  // fullName: String,
  // nationalId: String,
  // gender: String,
  // phoneNumber: String

  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function addPatient() {
    axios({
      method: "post",
      url: "http://localhost:5000/addPatient",
      data: {
        fullName: fullName,
        nationalId: nationalId,
        gender: gender,
        phoneNumber: phoneNumber,
      },
    })
      .then((response) => {
        console.log(response.data);
        // setPermits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get("http://localhost:5000/addVisit/" + nationalId)
      .then((response) => {
        console.log( response);
        
      })
      .catch((error) => {
        console.log(error);
      });
    
   
  }

  function addVisit(){
    axios
    .get("http://localhost:5000/addVisit/" + nationalId)
    .then((response) => {
      console.log( response);
      
    })
    .catch((error) => {
      console.log(error);
    });

  }


  
  

  function handleClick() {
    setDisplay("block");
    setDisplay1("none");
  }
  return (
    <Layout>
      <Container fluid className={styles.container}>
        <Row>
          <Col sm={6} className={styles.Search}>
            <input type="text" placeholder="Search Patient" />
          </Col>
          <Col sm={6} className={styles.buttons}>
            {/* <Button variant="success">Add visit</Button>{" "} */}
            <Button variant="success" onClick={() => handleClick()}>
              Add patient
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col sm={2}></Col>

          <Col
            sm={8}
            className={styles.table}
            style={{ display: `${display1}` }}
          >
            <Card className={styles.Card1}>
              <Card.Header>Patients</Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </Col>
          <Col
            sm={8}
            className={styles.tableadd}
            style={{ display: `${display}` }}
          >
            <Card className={styles.Card1}>
              <Card.Header>Add Patients</Card.Header>
              <Card.Body>
                <Col className={styles.Col}>
                  <label>Name</label>
                  <br/>
                  <input onChange={(e)=>setFullName(e.target.value)} className={styles.inputs} type="text"></input>
                  <br/>
                  <label>National id</label>
                  <br/>
                  <input onChange={(e)=>setNationalId(e.target.value)} className={styles.inputs} type="text"></input>
                </Col>
                <Col className={styles.Col}>
                  <label>gender</label>
                  <br/>
                  <input onChange={(e)=>setGender(e.target.value)} className={styles.inputs} type="radio" name="gender" value="Male"/>
                  <label>Male</label>
                  <br/>
                  <input onChange={(e)=>setGender(e.target.value)} className={styles.inputs} type="radio" name="gender" value="Female"/>
                  <label>Female</label>
                  <br/>
                  <label>phoneNumber</label>
                  <br/>
                  <input onChange={(e)=>setPhoneNumber(e.target.value)} onChange={(e)=>setPhoneNumber(e.target.value)} className={styles.inputs} type="text"></input>
                </Col>
                <Col className={styles.Col}>
                  <Button onClick={()=> addPatient()}  variant="success">Add Patient </Button>{" "}
                  <Button onClick={()=> addVisit()}  variant="success">Add Visit</Button>{" "}
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </Layout>
  );
}
