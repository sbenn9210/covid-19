import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import Card from "../containers/Card";

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

  console.log(items.Global);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {items.Global ? (
          <div>
            {Object.entries(items.Global).map(([title, value]) => {
              return <Card title={title} value={value} />;
            })}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

export default Summary;

const Container = styled.div`
  flexGrow: 1,
    padding: theme.spacing(3),
`;
