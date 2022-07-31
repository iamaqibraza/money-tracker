import { Link } from "react-router-dom";
import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";
import { useAuthContext } from "../../hooks/useAuthContext";
import useFirestoreCollection from "../../hooks/useFirestoreCollection";
import { Tooltip } from "../../components/Tooltip";
export default function Home() {
	const { user } = useAuthContext();
	const {
		isPending,
		error,
		documents: transactions,
	} = useFirestoreCollection(
		"transactions",
		["uid", "==", user.uid],
		["createdAt"]
	);
	return (
		<>
			{user && (
				<div className="fixed bottom-10 left-0 w-full flex justify-start pt-8 px-4 md:px-16 lg:px-28 xl:px-44">
					<Tooltip tooltipMessage="Feedback">
						<Link to="/feedback">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-11 w-11 p-2 text-gray-100 cursor-pointer bg-white/10 rounded-full"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1.5}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
								/>
							</svg>
						</Link>
					</Tooltip>
				</div>
			)}
			<div className="flex flex-col items-center mt-16 md:flex-row md:items-start justify-between mx-auto px-4 md:px-16 lg:px-28 xl:px-44">
				<TransactionForm />
				<div className="md:order-first mt-16 md:mt-0 w-full">
					{error && <h3>{error}</h3>}
					{transactions && (
						<TransactionList
							transactions={transactions}
							isPending={isPending}
						/>
					)}
				</div>
			</div>
		</>
	);
}
