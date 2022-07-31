import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";
import { useAuthContext } from "../../hooks/useAuthContext";
import useFirestoreCollection from "../../hooks/useFirestoreCollection";
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
	);
}
