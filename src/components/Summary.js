import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

function Summary() {
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => response)
      .then((data) => console.log(data));
  });

  return (
    <Container>
      <Typography>Shawn wekwleeklekwelwkelekeklwkwkwewlekwel</Typography>
    </Container>
  );
}

export default Summary;

const Container = styled.div`
  flexGrow: 1,
    padding: theme.spacing(3),
`;
