import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Tooltip } from "./Tooltip";

export default function Navbar() {
	const { user } = useAuthContext();
	const {
		isPending: logoutIsPending,
		error: logoutError,
		logout,
	} = useLogout();
	return (
		<div className="bg-gray-800 py-4 flex justify-between items-center px-4 md:px-16 lg:px-28 xl:px-44">
			<div className="flex items-center">
				<h1 className="flex justify-between font-bold text-lg text-white sm:text-2xl mr-4">
					<Link to="/">Money Tracker</Link>
				</h1>
			</div>

			<div className="flex space-x-4 items-center">
				{/* if user is not signed in, then show the login and signup */}
				{!user && (
					<>
						<Link
							className="text-gray-400 font-medium hover:text-white active:text-gray-200"
							to="/login"
						>
							Login
						</Link>
						<Link
							to="/signup"
							className="font-medium py-2 px-4 rounded text-gray-50 bg-blue-700 hover:bg-blue-600 active:bg-blue-800"
						>
							<span className="opacity-100">Sign up</span>
						</Link>
					</>
				)}
				{/* if user is signed in, then show the logout*/}
				{user && (
					<>
						<span className="text-gray-400 capitalize">
							Hi, {user.displayName.split(" ")[0]}
						</span>
						<button
							onClick={() => logout()}
							className="text-gray-50 font-medium py-2 px-4 bg-red-800 rounded hover:bg-red-700 active:bg-red-900"
						>
							Logout
						</button>
					</>
				)}
			</div>
		</div>
	);
}
