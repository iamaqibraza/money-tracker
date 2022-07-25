import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
	const { user } = useAuthContext();
	const {
		isPending: logoutIsPending,
		error: logoutError,
		logout,
	} = useLogout();
	return (
		<div className="bg-purple-800 py-4 flex justify-between items-center px-4 md:px-16 lg:px-28 xl:px-44">
			<h1 className="flex justify-between font-bold text-2xl text-white">
				<Link to="/">Money Tracker</Link>
			</h1>
			<div className="flex space-x-6 items-center">
				{/* if user is not signed in, then show the login and signup */}
				{!user && (
					<>
						<Link
							className="text-gray-100 font-medium hover:text-white active:text-gray-100"
							to="/login"
						>
							Login
						</Link>
						<Link
							to="/signup"
							className="text-gray-100 font-medium py-2 px-4 bg-white/30 rounded hover:bg-white active:bg-white/95 hover:text-purple-800"
						>
							<span className="opacity-100">Sign up</span>
						</Link>
					</>
				)}
				{/* if user is signed in, then show the logout*/}
				{user && (
					<>
						<span className="text-gray-100 capitalize">
							{" "}
							Hello, {user.displayName}
						</span>
						<button
							onClick={() => logout()}
							className="text-gray-50 font-medium py-2 px-4 bg-red-700 rounded active:bg-red-600 hover:bg-red-500 "
						>
							Logout
						</button>
					</>
				)}
			</div>
		</div>
	);
}
