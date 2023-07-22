import React, { Component } from "react";
import { Suspense, lazy } from "react";
import NavBar from "./components/navBar";
import Loading from "./pages/Loading";

const Component1 = lazy(() => import("../src/pages/ProductDetailsPage"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCounter: 0,
    };
  }

  handleAddToCart = () => {
    this.setState((prevState) => ({ cartCounter: prevState.cartCounter + 1 }));
  };

  render() {
    return (
      <>
        <NavBar />
        <Suspense fallback={<Loading />}>
          <Component1 onBuyNow={this.handleAddToCart} />
        </Suspense>
      </>
    );
  }
}

export default App;
