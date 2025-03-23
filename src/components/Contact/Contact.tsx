import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Driven by passion, fueled by hard work—let's connect and create! </p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ankushkumar19122001@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ankushkumar19122001@gmail.com">Hello@Ankush.com</a>
        </div>
        <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+91) 7013449185</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}