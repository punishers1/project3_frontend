import Layout from "../../components/Mylayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col, Container, Row, Form } from "react-bootstrap";
import styles from "../../styles/Admin.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function index() {
  const [display, setDisplay] = useState("none");
  const [display1, setDisplay1] = useState("block");
  const [fullName, setFullName] = useState("");
  const [nationalid, setNationalId] = useState("");
  const [role, setRole] = useState("");
  // const [roles, setRoles]=useState([])
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [roles, setRoles] = useState([]);

  function handleClick() {
    setDisplay("block");
    setDisplay1("none");
  }

  function addusers() {
    axios({
      method: "post",
      url: "http://localhost:5000/add",
      data: {
        nationalid: nationalid,
        fullName: fullName,
        role: role,
        password: password,
      },
    })
      .then((response) => {
        console.log(response.data);
        //  setPermits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(async () => {
    axios
      .get("http://localhost:5000/roles")
      .then((response) => {
        console.log("Role", response.data.result);
        setRoles(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(roles);
  return (
    <Layout>
      <Container fluid>
        <Row className={styles.Colcenter1}>
          <Col>
            <Button onClick={() => handleClick()} variant="success">
              Add user
            </Button>{" "}
          </Col>
        </Row>
        <Row className={styles.Colcenter} style={{ display: `${display1}` }}>
          <Col sm={6}>
            <form action="#">
              <label for="lang">Role </label>
              <select name="languages" id="lang">
                <option value="javascript">Admin</option>
                <option value="php">Doctor</option>
                <option value="java">Nurse</option>
                <option value="golang">Res</option>
                <option value="golang"></option>
              </select>
              <input type="submit" value="Submit" />
            </form>
          </Col>
          {/* <Col sm={6}>
            <form action="#">
              <label for="lang">Role </label>
              <select name="languages" id="lang">
               
              </select>
              <input type="submit" value="Submit" />
            </form>
          </Col> */}
        </Row>
        <Row className={styles.Col2} style={{ display: `${display1}` }}>
          <h5>name</h5>
          <h5>role </h5>
          <h5>National id</h5>
        </Row>
        <Row className={styles.Col2} style={{ display: `${display}` }}>
          <label>Name</label>
          <input
            onChange={(e) => setFullName(e.target.value)}
            className={styles.inputs}
            type="text"
          ></input>
          <label>National id</label>
          <input
            onChange={(e) => setNationalId(e.target.value)}
            className={styles.inputs}
            type="text"
          ></input>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputs}
            type="text"
          ></input>
          {roles.map((ele) => (
            <div key={ele._id}>
              <Form.Check
                inline
                label={ele.title}
                name="role"
                type="radio"
                id={ele._id}
                value={ele.title}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          ))}
          <Button onClick={() => addusers()} variant="success">
            Add
          </Button>{" "}
        </Row>
      </Container>
    </Layout>
  );
}
