import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/header"
import Footer from "./components/footer"
import Body from "./components/body/main"

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

