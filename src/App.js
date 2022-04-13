/** @format */

import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import Layout from "./components/Layout";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpense />
			</div>
			<Layout />
		</div>
	);
}

export default App;
