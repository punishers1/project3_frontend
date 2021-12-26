import Layout from "../../components/Mylayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Form, Col, Container, Row, Button } from "react-bootstrap";
import styles from "../../styles/Nur.module.css";

export default function index() {
  const [patiantId, setPatiantId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationalId, setNationalId] = useState("");
  // const[typeStatus, setTypeStatus]= useState("");
  // Patiant Data

  const [tempeature, setTempeature] = useState("");
  const [weight, setWeight] = useState("");
  const [bp, setBp] = useState("");
  const [heartRate, setHeartRate] = useState("");
  // const [display, setDisplay] = useState("none");
  const [typeStatus, setTypeStatus] = useState("");

  const [data, setData] = useState([]);

  const [isChanged, setIsChanged] = useState(false);

  const [patientData, setPatientData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/Res/Visits")
      .then((response) => response.json())
      .then((data) => setData(data.result))

      .catch((err) => console.log(err));
  }, [isChanged]);
  console.log(data);

  function saveNurse() {
    let d = {
      tempeature: tempeature,
      weight: weight,
      bp: bp,
      heartRate: heartRate,
      typeStatus: typeStatus,
    };

    axios({
      method: "put",
      url: "http://localhost:5000/Res/addNursingDeptDetails/" + patiantId,
      data: d,
    })
      .then((response) => {
        console.log(response);
        setIsChanged(!isChanged);
        // setMessage("block")
      })
      .catch((error) => {
        console.log(error);
        // setDisplay("block");
      });
  }

  function getPatintData(id) {
    fetch("http://localhost:5000/Res/Searchupdate/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPatiantId(data.patient._id);
        setName(data.patient.fullName);
        setGender(data.patient.gender);
        setPhoneNumber(data.patient.phoneNumber);
        setNationalId(data.patient.nationalId);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Layout className={styles.body}>
      <Container>
        <Row >
          <Col md={3} className={styles.visits}>
            {data &&
              data.map((elem) => {
                return (
                  <Card className={styles.card}>
                    <Card.Body>
                      <Card.Title>{elem.date}</Card.Title>
                      <Card.Text>Patient Name: <h4>{elem.patientId.fullName}</h4></Card.Text>
                      <Button
                        variant="success"
                        onClick={() => {
                          getPatintData(elem.patientId.nationalId);
                        }}
                      >
                        Get This Patient
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
          </Col>

          <Col>
            <Row className={styles.form}>
              <Row className={styles.Row}>
                <Col>
                <label>Name</label>
                  <Form.Control
                    // className={Nurce.Col}
                    type="text"
                    disabled
                    value={name}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Col>

                <Col>
                <label>Gender</label>
                  <Form.Control
                    // className={Nurce.Col}

                    type="text"
                    disabled
                    value={gender}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className={styles.Row}>
                <Col>
                <label>Phone Number</label>
                  <Form.Control
                    // className={Nurce.Col}
                    type="text"
                    disabled
                    value={phoneNumber}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Col>
                <Col>
                <label>National id</label>
                  <Form.Control
                    // className={Nurce.Col}
                    type="text"
                    disabled
                    value={nationalId}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Col>
              </Row>
            </Row>
            <Card className={styles.form}>
              <Card.Body>
                <form >
                  <div>
                    <label className={styles.label} for="inp">temperature</label><br/>
                    <input
                      onChange={(e) => setTempeature(e.target.value)}
                      type="text"
                      class="inp"
                    />
                    <br />
                    <label for="inp">blood Rrusture</label><br/>
                    <input
                      onChange={(e) => setBp(e.target.value)}
                      type="text"
                      class="inp"
                    />
                    <br />
                    <label for="inp">weight</label><br/>
                    <input
                      onChange={(e) => setWeight(e.target.value)}
                      type="text"
                      class="inp"
                    />
                    <br />
                    <label for="inp">heartRate</label><br/>
                    <input
                      onChange={(e) => setHeartRate(e.target.value)}
                      type="text"
                      class="inp"
                    />
                    <br />
                    <label for="inp">Status type </label><br/>
                    <h5>
                      critical{" "}
                      <input
                        onChange={(e) => setTypeStatus(e.target.value)}
                        type="radio"
                        name="status"
                      />
                    </h5>
                    <h5>
                      medium{" "}
                      <input
                        onChange={(e) => setTypeStatus(e.target.value)}
                        type="radio"
                        name="status"
                      />
                    </h5>
                    <h5>
                      stable{" "}
                      <input
                        onChange={(e) => setTypeStatus(e.target.value)}
                        type="radio"
                        name="status"
                      />
                    </h5>
                    <Button onClick={() => saveNurse()} variant="success">
                      Send to Doctor
                    </Button>{" "}
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
