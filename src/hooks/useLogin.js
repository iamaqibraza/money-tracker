import { projectAuth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";

export const useLogin = () => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		try {
			setError(null);
			setIsPending(true);
			const res = await projectAuth.signInWithEmailAndPassword(
				email,
				password
			);
			// do something
			dispatch({ type: "LOGIN", payload: res.user });
			setError(null);
			setIsPending(false);
		} catch (error) {
			console.log(error.message);
			setError(error.message);
			setIsPending(false);
		}
	};

	return { isPending, error, login };
};
