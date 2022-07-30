import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";

export default function TransactionForm() {
	const [transactionName, setTransactionName] = useState("");
	const [amount, setAmount] = useState("");
	const { addDocument, response } = useFirestore("transactions");

	const handleSubmit = (e) => {
		e.preventDefault();
		addDocument({ transactionName, amount });
	};

	useEffect(() => {
		if (response.success) {
			console.log("added document");
			setTransactionName("");
			setAmount("");
		}
	}, [response]);

	return (
		<div className="w-full lg:w-1/2 px-6 rounded-md text-slate-400 py-12 border-2 border-slate-100">
			<form onSubmit={handleSubmit}>
				<h2 className="text-slate-600 font-semibold text-xl tracking-tight">
					Add a Transaction
				</h2>

				<div className="mt-6">
					<label>
						<span className="block"> Transaction Name: </span>
						<input
							className="p-2 mt-2 bg-slate-50 w-full"
							type="text"
							onChange={(e) => setTransactionName(e.target.value)}
							value={transactionName}
						/>
					</label>
				</div>

				<div className="mt-4">
					<label>
						<span className="block"> Amount($): </span>
						<input
							className="bg-slate-50 p-2 mt-2 w-full"
							type="number"
							onChange={(e) => setAmount(e.target.value)}
							value={amount}
						/>
					</label>
				</div>
				{response.isPending ? (
					<button
						disabled
						type="submit"
						className="text-gray-100 font-medium py-2 px-4 rounded bg-purple-800 hover:bg-purple-700 active:bg-purple-800 mt-8"
					>
						Loading ...
					</button>
				) : (
					<button
						type="submit"
						className="text-gray-100 font-medium py-2 px-4 rounded bg-purple-800 hover:bg-purple-700 active:bg-purple-800 mt-8"
					>
						Add Transaction
					</button>
				)}
			</form>
		</div>
	);
}
