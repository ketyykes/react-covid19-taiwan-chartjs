import React, { useState, useEffect } from "react";
import { Cards ,DistructPicker,Charts} from "./components";
//從components底下導入所有components底下整合成一支檔案的index.js
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";
const App = () => {
  const { container } = styles;
  const [data, setData] = useState();
  const [cities, setCities] = useState("");
  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData());
    };
    fetchAPI();
  }, []);
  console.log(cities);
  return (
    <div className={container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
      <DistructPicker handleCountryChange={setCities}/>
      <Cards data={data} cities={cities} />
      <Charts allData={data} cities={cities} />
    </div>
  );
};

export default App;
