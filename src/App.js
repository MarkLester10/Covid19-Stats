import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import logo from "./imgs/loho.png";
import doc from "./imgs/virus.png";
import scan from "./imgs/scan.png";
import check from "./imgs/doctor.png";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={logo} alt="logo" />
        <img className={styles.doc} src={doc} alt="logo" />
        <img className={styles.scan} src={scan} alt="logo" />
        <img className={styles.check} src={check} alt="logo" />
        <h1>Stats</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
