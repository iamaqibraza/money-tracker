import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="bg-purple-800 py-4 flex justify-between items-center px-4 md:px-16 lg:px-28 xl:px-44">
			<h1 className="flex justify-between text-white font-bold text-2xl">
				<Link to="/">Money Tracker</Link>
			</h1>
			<div className="c">
				<ul className="flex space-x-6">
					<li className="text-gray-100 font-medium hover:text-white active:text-gray-100">
						<Link to="/login"> Login </Link>
					</li>
					<li className="text-gray-100 font-medium">
						<Link
							to="/signup"
							className="py-2 px-4 bg-white/30 rounded hover:bg-white active:bg-white/95 hover:text-purple-800"
						>
							<span className="opacity-100">Sign up</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
