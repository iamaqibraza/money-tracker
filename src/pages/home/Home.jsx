import { useState, useEffect } from "react";
import TransactionForm from "../../components/TransactionForm";
import { projectFirestore } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Home() {
	const { user } = useAuthContext();
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		console.log("dafuq");
		setIsPending(true);
		setError(null);
		const unsub = projectFirestore.collection("transactions").onSnapshot(
			(snapshot) => {
				let fetchedTransactions = [];
				snapshot.forEach((doc) => {
					fetchedTransactions.push({ id: doc.id, ...doc.data() });
					setTransactions(fetchedTransactions);
				});
			},
			(error) => {
				setIsPending(false);
				setError(error.message);
			}
		);
		return () => unsub();
	}, []);

	return (
		<div className="flex flex-col items-center mt-16 md:flex-row md:items-start justify-between mx-auto px-4 md:px-16 lg:px-28 xl:px-44">
			<TransactionForm uid={user?.uid} />
			<div className="md:order-first mt-16 md:mt-0">
				<h1> Transaction List</h1>
				<ul>
					{transactions.map((t) => {
						return <li key={t.id}> {t.transactionName}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}
