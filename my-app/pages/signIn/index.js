import Layout from "../../components/Mylayout"
import { Form, Button } from 'react-bootstrap';
import styles from "../../styles/signIn.module.css"
export default function signIn() {
    return (
        <div>
          <form className={styles.form} >
        <h3 >Signin</h3>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4R84-rle6PTFGphEMfdaDuo4mM-M1pZZPPg&usqp=CAU"
          className={styles.img}
        />
        

        <div className={styles.btnn}>
          <label >nationalId</label>
          <input
            type="text"
            placeholder="Enter your ID`"
            
            
          />
        </div>

        <div className={styles.btnn}>
          <label >Password</label>
          <input
            type="password"
            placeholder="Enter password" />
        </div>

        <button 
          type="submit"
          className={styles.btn}>
          
            
          Signin
        </button>
      </form>
    </div>    
              
    )
}
