import Layout from "../components/Mylayout"
import styles from "../styles/SignIn.module.css"
import axios from "axios";
import React, { useState } from "react";
import {Container,Col,Row, Form, Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function signIn() {
  const [NationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("none");


  function getLoginData() {
    axios
      .post("http://localhost:5000/logIn", {
        nationalid: NationalId,
        password: password,
      })
      .then((res) => {
        
        if (res.data !== undefined) {
         
           localStorage.setItem("token", JSON.stringify(res.data.token));
          // sessionStorage.setItem("isAdmin", res.data.isAdmin);
          // sessionStorage.setItem("userId", res.data.userId);
          // window.location.href = "/SecureCode";
        }
      })
      .catch((err) => {
        setDisplay("Block");
        console.log(err.res);
      });
      const token = JSON.parse(localStorage.getItem("token"));
      fetch("http://localhost:5000/logIn", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const role=data.token.role;
          if(role==="Admin"){
             window.location.href = "/admin1";
          }else if (role==="Receptionist"){
            window.location.href = "/Res";
          }
          else if (role==="Nurse"){
            window.location.href = "/nurse";
          }
          else if (role==="Doctor"){
            window.location.href = "/doctor";
          }
          console.log(data.token.role);
          // setUserName(data.token.name);
          // setRole(data.token.role);
        })
        .catch((err) => console.log(err));

  }
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
      <input onChange={(e)=>setNationalId(e.target.value)} className={styles.inputs} placeholder="Ntionail Id" type="text"></input>
    </Card.Text>
    <Card.Text>
    {/* <h5 className={styles.text}>password</h5> */}
      <input onChange={(e)=>setPassword(e.target.value)} className={styles.inputs} placeholder="Password" type="password"></input>
    </Card.Text>
    <Button onClick={()=>getLoginData()} className={styles.button}>Sign in</Button>
  </Card.Body>
</Card>
</Col>

    <Col sm={5}><img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Logo_of_Oslo_University_Hospital.svg/1280px-Logo_of_Oslo_University_Hospital.svg.png"/></Col>
  </Row>
  </Container>
     
     </div>
       
      

       
    )
}
