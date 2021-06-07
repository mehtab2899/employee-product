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
import ForgetPW from "./components/ForgetPW";
import AdminDashboard from "./components/AdminComps/AdminDashboard.jsx";

AOS.init();

const App = () => {
	return (
		<>
			{/* header */}
			{/* <Header /> */}

			{/* routings */}
			<Switch>
				<Route exact path="/" component={HomeScreen} />
				<Route exact path="/signin" component={SignInScreen} />
				<Route exact path="/admin" component={Admin} />
				<Route exact path="/employee" component={Employee} />
				<Route exact path="/forgot" component={ForgetPW} />
				<Route exact path="/admin-dashboard" component={AdminDashboard} />
			</Switch>

			{/* footer */}
			{/* <Footer /> */}
		</>
	);
};

export default App;
