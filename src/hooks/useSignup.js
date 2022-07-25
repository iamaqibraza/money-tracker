import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
	const [isPending, setIspending] = useState(false);
	const [error, setError] = useState("");
	const { dispatch } = useAuthContext();

	const signup = async (email, password, displayName) => {
		try {
			setError("");
			setIspending(true);
			const res = await projectAuth.createUserWithEmailAndPassword(
				email,
				password
			);

			dispatch({ type: "LOGIN", payload: res.user });

			if (!res) {
				throw new Error("Could not complete signup");
			}

			await projectAuth.currentUser.updateProfile({ displayName });
			setIspending(false);
			setError(null);
		} catch (error) {
			setError(error.message);
			setIspending(false);
		}
	};

	return { isPending, error, signup };
};
