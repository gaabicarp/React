import React from "react";
import Footer from "./Componentes/Footer";

class Cities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      cities: [],
      url: "http://localhost:4000/city/all"
    };
  }

  componentDidMount() {
    this.getCities();
  }

  getCities = () => {
    this.setState({ loading: true });

    fetch(this.state.url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cities: data.respuesta,
          loading: false
        });
      })
      .catch(e => console.log(e));
  };

  render() {
    console.log(this.state.cities);

    if (this.state.loading) {
      return (
        <div className="principal">
          <p>Descargando Api perro!</p>
        </div>
      );
    }

    return (
      <div className="principal">
        <h1>asdas</h1>
        {this.state.cities.map(city => {
          return <li key={city._id}>{city.ciudad}</li>;
        })}
        <Footer />
      </div>
    );
  }
}

export default Cities;
