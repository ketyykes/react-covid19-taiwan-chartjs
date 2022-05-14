import React, { useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import dayjs from "dayjs";
const Cards = ({
  data: { city_confirmed, total_confirmed_value } = {},
  cities,
}) => {
  if (!total_confirmed_value) {
    return "loading...";
  } else {
    return (
      <div className={styles.container}>
        <Grid container spacing={0} justifyContent="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={12}
            className={`${styles.infected} ${styles.card}`}
          >
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                全台感染人數
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={total_confirmed_value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                2022年04月份感染人數
              </Typography>
              <Typography variant="body2" gutterBottom>
                備註：無
              </Typography>
            </CardContent>
          </Grid>
          {cities ? (
            <Grid
              item
              component={Card}
              xs={12}
              md={12}
              className={`${styles.infected} ${styles.card}`}
            >
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  {cities}
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={
                      city_confirmed.find((city) => city.name === cities)
                        .city_confirmed_value
                    }
                    duration={0.5}
                    separator=","
                  />
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  2022年04月份感染人數
                </Typography>
                <Typography variant="body2" gutterBottom>
                  備註：無
                </Typography>
              </CardContent>
            </Grid>
          ) : null}
        </Grid>
      </div>
    );
  }
};

export default Cards;
