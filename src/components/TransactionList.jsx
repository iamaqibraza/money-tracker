import React from "react";

export default function TransactionList({ transactions }) {
	console.log(transactions);
	return (
		<ul className="space-y-5 md:mr-8 lg:w-1/2">
			{transactions.map((t) => {
				return (
					<li
						className="flex justify-between bg-white rounded p-4 border-2 border-l-4 border-slate-100 border-l-purple-800"
						key={t.id}
					>
						<h2 className="text-purple-800 font-semibold text-xl tracking-tight uppercase">
							{t.transactionName}
						</h2>
						<p>${t.amount}</p>
					</li>
				);
			})}
		</ul>
	);
}
