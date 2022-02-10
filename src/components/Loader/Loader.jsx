import React from "react";
import { LoaderContainer } from "./Loader.styled";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => (
  <LoaderContainer>
    <BallTriangle color="#3f51b5" height={80} width={80} />
  </LoaderContainer>
);

export default Loader;