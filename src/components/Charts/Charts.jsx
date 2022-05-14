import React, { useEffect, useState } from "react";
import styles from "./Charts.module.css";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import dayjs from "dayjs";
Chart.register(...registerables);

const Charts = ({ allData, cities }) => {
  const currentCity = allData?.city_confirmed.find(
    (city) => city.name === cities
  );
  console.log(allData?.city_confirmed);
  const linChart = cities ? (
    <Line
      data={{
        labels: currentCity.city_date_confirmed.map(({ date }) =>
          dayjs(date).format("YYYY-MM-DD")
        ),
        datasets: [
          {
            data: currentCity.city_date_confirmed.map(({ value }) => value),
            label: "Infected",
            borderColor: "blue",
            borderWidth: 0.1,
            backgroundColor: "rgba(255, 0 , 0 , 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>
      {/* <Line data={data}></Line> */}
      {linChart}
    </div>
  );
};

export default Charts;
