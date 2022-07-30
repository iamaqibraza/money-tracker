import { useFirestore } from "../hooks/useFirestore";

export default function TransactionList({ transactions }) {
	const { deleteDocument, response } = useFirestore("transactions");

	const onDelete = (id) => {
		deleteDocument(id);
		console.log(response);
	};

	return (
		<ul className="space-y-5 md:mr-8 lg:w-1/2">
			{transactions.map((t) => {
				return (
					<li
						className="flex justify-between bg-white rounded p-4 border-2 border-l-4 border-slate-100 border-l-purple-800"
						key={t.id}
					>
						<p className="text-slate-600 font-medium">
							${t.amount}
						</p>
						<h2 className="text-purple-800 font-semibold text-xl tracking-tight uppercase">
							{t.transactionName}
						</h2>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-red-700 hover:text-red-500 active:text-red-600 cursor-pointer"
							onClick={() => onDelete(t.id)}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
					</li>
				);
			})}
		</ul>
	);
}
