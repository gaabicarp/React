import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Componentes/Footer";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import logo from "./Componentes/img/Logo.png";
import Col from 'react-bootstrap/Col';
import Axios from 'axios'
import GoogleLogin from 'react-google-login';

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
      image: null,
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

  handleFile = (e) =>{
    let file = e.target.files[0]
    this.setState({image: file})
  }

  submitHandler = (e) =>{
    e.preventDefault();
    if(formValid(this.state)){
    console.log(this.state);


    let file = this.state.image;
    let formData = new FormData();

    formData.append('image', file, file.name)

    console.log(formData)

    Axios.post(
      'http://localhost:4000/user/create', 
      {
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      Email: this.state.Email,
      UserName: this.state.UserName,
      Password: this.state.Password,
      image: formData
    })
      .then(response =>{
        console.log(response.config.data);
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

    const responseGoogle = (response) => {
      console.log(response);
    }
    const {Firstname, Lastname, Email, UserName, Password, formErrors } = this.state;
    return (
      <div className="principal">
        <br></br>
        <div className="logo">
          <img alt="logo" src={logo}></img>
        </div>
        <br></br>
        <h1>CREATE ACCOUNT</h1>
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
            <form>
              <label>
                Upload file:
                <input type="file" name="file" onChange={(e)=>this.handleFile(e)}/>
              </label>
              <br />
            </form>
            <br></br>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <Link to ="/google">
        <GoogleLogin
          clientId="12194280660-7f0s85enas5qcpn9h8b9vab446si0jr9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        </Link>
        <Footer />
      </div>
    );
  }
}

export default CreateAcount;
