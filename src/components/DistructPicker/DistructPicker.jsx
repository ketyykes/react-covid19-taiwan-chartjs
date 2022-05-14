import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@mui/material";
import styles from "./DistructPicker.module.css";
import { fetchData } from "../../api";
const DistructPicker = ({ handleCountryChange }) => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    //在useEffect使用async,要不就是寫立即執行函式
    //不然就是寫一個函式然後執行它
    (async () => {
      const data = await fetchData();
      const cityArray = data.city_confirmed.map((cityEl) => cityEl.name);
      setCities(cityArray);
    })();
  }, []);
  return (
    <>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
        >
          <option value="" disabled  >請選擇都市</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default DistructPicker;
