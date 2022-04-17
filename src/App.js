/** @format */

import "./App.css";
import AddExpense from "./components/AddExpense";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpense />
				<AddExpense/>
			</div>
		</div>
	);
}

export default App;
