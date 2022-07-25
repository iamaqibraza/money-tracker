import React from "react";

export default function TransactionForm() {
	return (
		<div>
			<h2> Add a Transaction </h2>
			<div>
				<form>
					<label>
						<span> Transaction Name: </span>
						<input type="text" />
					</label>

					<label>
						<span> Amount($): </span>
						<input type="text" />
					</label>
				</form>
			</div>
		</div>
	);
}
