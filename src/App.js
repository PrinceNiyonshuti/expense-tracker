/** @format */

import "./App.css";
import AddExpense from "./components/AddExpense";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./redux/GlobalState";
function App() {
	return (
		<GlobalProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpense />
				<TransactionList />
				<AddExpense />
			</div>
		</GlobalProvider>
	);
}

export default App;
