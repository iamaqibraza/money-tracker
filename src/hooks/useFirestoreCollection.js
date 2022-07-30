import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

export default function useFirestoreCollection(collection) {
	const [error, setError] = useState(null);
	const [documents, setDocuments] = useState([]);

	useEffect(() => {
		setError(null);
		const unsub = projectFirestore.collection(collection).onSnapshot(
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
	}, [collection]);

	return { error, documents };
}
