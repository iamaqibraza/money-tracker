import { useState, useEffect, useRef } from "react";
import { projectFirestore } from "../firebase/config";

export default function useFirestoreCollection(collection, _query, _orderBy) {
	const [error, setError] = useState(null);
	const [documents, setDocuments] = useState([]);
	const query = useRef(_query).current;
	const orderBy = useRef(_orderBy).current;

	useEffect(() => {
		let ref = projectFirestore.collection(collection);
		if (query) {
			ref = ref.where(...query);
		}
		if (orderBy) {
			ref = ref.orderBy(...orderBy);
		}
		console.log(ref);
		const unsub = ref.onSnapshot(
			(snapshot) => {
				let result = [];
				snapshot.forEach((doc) => {
					result.push({ id: doc.id, ...doc.data() });
				});
				setDocuments(result);
				setError(null);
			},
			(error) => {
				setError(error.message);
				console.log(error.message);
			}
		);
		return () => unsub();
	}, [collection, orderBy, query]);

	return { error, documents };
}
