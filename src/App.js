import React from "react";
import Header from "./components/Header";

import CssBaseline from "@material-ui/core/CssBaseline";

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
      <Header></Header>
    </React.Fragment>
  );
}
