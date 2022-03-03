import React from "react";

import HeaderAuthorized from "./components/header/HeaderAuthorized";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";


function App() {
  return (
      <div>
          <HeaderAuthorized auth={true} />
          <Main />
          <Footer />
      </div>
  );
}

export default App;
