import React from "react";
import { render } from "react-dom";

import Root from "./components/Root";
import "./styles.scss";

render(
  <>
    <Root />
    <Root />
  </>,
  document.getElementById("app")
);
