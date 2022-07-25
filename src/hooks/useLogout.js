import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState();
	const { dispatch } = useAuthContext();

	const logout = async () => {
		console.log("logout function start");
		try {
			setError(null);
			setIsPending(true);
			await projectAuth.signOut();
			dispatch({ type: "LOGOUT" });
			setIsPending(false);
			setError(null);
		} catch (error) {
			setError(error.message);
			setIsPending(false);
		}
	};

	return { isPending, error, logout };
};
