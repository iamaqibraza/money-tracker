// import createcontext and useReducer
import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/config";

//initialize context
export const AuthContext = createContext();

//provide context to child components
export const AuthProvider = ({ children }) => {
	// use useReducer Hook
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		authIsReady: false,
	});
	console.log("test", state);

	useEffect(() => {
		const unsub = projectAuth.onAuthStateChanged((user) => {
			dispatch({ type: "AUTH_IS_READY", payload: user });
			unsub();
		});
	}, []);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

const authReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return { ...state, user: action.payload };

		case "LOGOUT":
			return { ...state, user: null };

		case "AUTH_IS_READY":
			return { ...state, user: action.payload, authIsReady: true };
		default:
			return state;
	}
};
