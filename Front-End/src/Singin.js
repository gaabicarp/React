import React from "react";
import Footer from "./Componentes/Footer";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import logo from "./Componentes/img/Logo.png";
import Col from 'react-bootstrap/Col';
import Axios from 'axios'


//Regex para Email y Pw
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
var passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

//Valida formulario
const formValid = ({formErrors, ...rest}) =>{
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid =false);
  });

  Object.values(rest).forEach(val => {
    val === '' && (valid = false);
  });

  return valid;
}

class CreateAcount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Firstname: '',
      Lastname: '',
      Email: '',
      UserName: '',
      Password: '',
      formErrors:{
        Firstname: "",
        Lastname: "",
        Email: "",
        UserName: "",
        Password: ""
      }
    };
  }

//Cambia el Formulario
  changeHandler = (e) =>{
    this.setState({[e.target.name] : e.target.value});
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    
    console.log("name: ", name) ;
    console.log("value: ", value);
    
    //Validacion
    switch(name){
      case 'Firstname':
        formErrors.Firstname = value.length < 3 ? 'Minimo 3 caracteres' : "";
        break;
      case 'Lastname':
          formErrors.Lastname = value.length < 3  ? 'Minimo 3 caracteres' : "";
        break;
      case 'Email':
          formErrors.Email = emailRegex.test(value) ? '' : 'Email invalido';
        break;
      case 'UserName':
          formErrors.UserName = value.length < 4 ? 'Minimo 4 caracteres' : "";
        break;
      case 'Password':
          formErrors.Password = passwordRegex.test(value) ? '' : "Minimo 1 caracter MAYUSCULA/NUMERO";
        break;
    }

    this.setState({formErrors, [name]: value}, () => console.log(this.state));
  }

  submitHandler = (e) =>{
    e.preventDefault();
    if(formValid(this.state)){
    console.log(this.state)

    Axios.post('http://localhost:4000/user/create', {
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      Email: this.state.Email,
      UserName: this.state.UserName,
      Password: this.state.Password
    })
      .then(response =>{
        return response.data;
      })
      .catch(error =>{
        console.log(error)
      })
    }
    else{
    console.error('Formulario Invalido');
    }

  }


  
  render() {
    const {Firstname, Lastname, Email, UserName, Password, formErrors } = this.state;
    return (
      <div className="principal">
        <div className="logo">
          <img alt="logo" src={logo}></img>
        </div>
        <h1>SING IN</h1>
        <div className="FormCreate">
          <Form method="POST" onSubmit={this.submitHandler}>
            <Form.Row>
              <Col>
                <Form.Label>First name</Form.Label>
                <Form.Control placeholder="First name" name="Firstname" value={Firstname} onChange={this.changeHandler}/>
                {formErrors.Firstname.length > 0 && (<span className="errorMessaje">{formErrors.Firstname}</span>)}
              </Col>
              <Col>
                <Form.Label>Last name</Form.Label>
                <Form.Control placeholder="Last name" name="Lastname" value={Lastname} onChange={this.changeHandler}/>
                {formErrors.Lastname.length > 0 && (<span className="errorMessaje">{formErrors.Lastname}</span>)}
              </Col>
            </Form.Row>
            <br></br>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="Email" value={Email} onChange={this.changeHandler}/>
              {formErrors.Email.length > 0 && (<span className="errorMessaje">{formErrors.Email}</span>)}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Group controlId="formBasicPassword" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="Password" value={Password} onChange={this.changeHandler}/>
                {formErrors.Password.length > 0 && (<span className="errorMessaje">{formErrors.Password}</span>)}
                </Form.Group>
              </Col>
              <Col>
              <Form.Label>User name</Form.Label><Form.Control placeholder="User name" name="UserName" value={UserName} onChange={this.changeHandler}/>
              {formErrors.UserName.length > 0 && (<span className="errorMessaje">{formErrors.UserName}</span>)}
              </Col>
            </Form.Row>
            {/* <form>
              <label>
                Upload file:
                <input type="file" name="image"/>
              </label>
              <br />
            </form>
            <br></br> */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CreateAcount;
