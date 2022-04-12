/** @format */

import React from "react";

function IncomeExpense() {
	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">350 Rwf</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">450 Rwf</p>
			</div>
		</div>
	);
}

export default IncomeExpense;
