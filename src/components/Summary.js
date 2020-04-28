import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import Card from "../containers/Card";
import Doughnut from "./Doughnut";
function Summary() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://api.covid19api.com/summary").then(
      (response) => {
        setIsLoaded(true);
        setItems(response.data);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {items.Global ? (
          <div>
            <Grid container justify="center" direction="row" spacing={2}>
              {Object.entries(items.Global).map(([title, value]) => {
                return (
                  <Grid item>
                    <Card title={title} value={value} />
                  </Grid>
                );
              })}
            </Grid>
            <Doughnut
              data={[
                items.Global.NewConfirmed,
                items.Global.NewDeaths,
                items.Global.NewRecovered,
                items.Global.TotalConfirmed,
                items.Global.TotalDeaths,
                items.Global.TotalRecovered,
              ]}
            />
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

export default Summary;
