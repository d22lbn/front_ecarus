import React from "react";


import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import HeaderAuthorized from "./components/header/HeaderAuthorized";


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
