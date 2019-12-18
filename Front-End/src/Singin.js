import React from "react";
import Footer from "./Componentes/Footer";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import logo from "./Componentes/img/Logo.png";
import Col from 'react-bootstrap/Col';
import Axios from 'axios'
import GoogleButton from 'react-google-button'
import Profile from "./Componentes/img/profile.png"


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
      imagePreviewUrl: Profile,
      Email: '',
      UserName: '',
      Password: '',
      image: null,
      formErrors:{
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
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        image: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  submitHandler = (e) =>{
    e.preventDefault();
    if(formValid(this.state)){
    console.log(this.state);

    let formData = new FormData();

    formData.append('Email', this.state.Email)
    formData.append('UserName', this.state.UserName)
    formData.set('Password', this.state.Password)
    
    formData.append('imagen', this.state.image);

    Axios.post(
      'http://localhost:4000/user/create', 
      formData
      )
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
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} className="profile-pic"/>);
    }
    const {Email, UserName, Password, formErrors } = this.state;
    return (
      <div className="principal">
        <br></br>
        <div className="logo">
          <img alt="logo" src={logo}></img>
        </div>
        <h3>CREATE ACCOUNT</h3>

        <div className="FormCreate">
          <Form method="POST" onSubmit={this.submitHandler}>
          <div class="avatar-wrapper">
            {$imagePreview}
          </div>
          <div class="button-wrapper">
          <Button variant="primary" >
              Upload Image
            </Button>
            
              <input type="file" name="file" class="upload-box" placeholder="Upload File" accept=".png, .jpg, .jpeg" onChange={(e)=>this.handleFile(e)}/>
          </div>
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
            <br></br>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <div className="Gboton">
        <a href="http://localhost:4000/auth/google">
          <GoogleButton/>
        </a>
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default CreateAcount;
