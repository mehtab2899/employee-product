import React from "react";
import { Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/screens/HomeScreen";
import SignInScreen from "./components/screens/SignInScreen";
import Admin from "./components/Admin";
import Employee from "./components/Employee";

AOS.init();

const App = () => {
	return (
		<>
			{/* header */}
			<Header />

			{/* routing */}
			<Switch>
				<Route exact path="/" component={HomeScreen} />
				<Route exact path="/signin" component={SignInScreen} />
				<Route exact path="/admin" component={Admin} />
				<Route exact path="/employee" component={Employee} />
			</Switch>

			{/* footer */}
			<Footer />
		</>
	);
};

export default App;
