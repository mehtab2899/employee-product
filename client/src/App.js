import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
			{/* routings */}
			<Router>
				<Header />
				<Route exact path="/" component={HomeScreen} />
				<Route exact path="/signin" component={SignInScreen} />
				<Route exact path="/admin" component={Admin} />
				<Route exact path="/employee" component={Employee} />
				<Route exact path="/forgot" component={ForgetPW} />
				<Route exact path="/dashboard" component={AdminDashboard} />
				<Footer />
			</Router>
		</>
	);
};

export default App;
