/** @format */

import "./App.css";
import AddExpense from "./components/AddExpense";
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
        <AddExpense/>
			</div>
			{/* <Layout /> */}
		</div>
	);
}

export default App;
