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
		<div className="bg-purple-800 py-4 flex justify-between items-center px-4 md:px-16 lg:px-28 xl:px-44 ">
			<div className="flex items-center">
				<h1 className="flex justify-between font-bold text-lg text-white sm:text-2xl mr-4">
					<Link to="/">Money Tracker</Link>
				</h1>
				{user && (
					<Tooltip tooltipMessage="Feedback">
						<Link to="/feedback">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-gray-100 cursor-pointer"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1.5}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
								/>
							</svg>
						</Link>
					</Tooltip>
				)}
			</div>

			<div className="flex space-x-4 items-center">
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
						<span className="text-gray-200 capitalize">
							Hi, {user.displayName.split(" ")[0]}
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
