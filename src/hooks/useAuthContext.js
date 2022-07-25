import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("Auth Context can only be used outside its provider.");
	}

	return context;
};
