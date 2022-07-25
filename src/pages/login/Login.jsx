import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { isPending, error, login } = useLogin();

	const onFormSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<form
			className="mt-28 max-w-xs mx-auto accent-purple-800"
			onSubmit={onFormSubmit}
		>
			<div className="flex flex-col justify-center">
				<label className="mr-5" htmlFor="email">
					Email
				</label>
				<input
					className="border py-3 px-3 bg-slate-50 text-gray-500"
					type="text"
					onChange={(e) => setEmail(e.target.value.trim())}
					value={email}
					name="email"
					required
				/>
			</div>
			<div className="flex flex-col justify-center mt-5">
				<label className="mr-5" htmlFor="password">
					Password
				</label>
				<input
					className="border py-3 px-3 bg-slate-50 text-gray-500"
					type="password"
					onChange={(e) => setPassword(e.target.value.trim())}
					value={password}
					name="password"
					required
				/>
			</div>
			{isPending ? (
				<button
					disabled
					className="py-3 px-9 bg-purple-800 rounded text-white mt-8 font-medium hover:bg-purple-800/95 active:bg-purple-800 "
				>
					Loading ...
				</button>
			) : (
				<button className="py-3 px-9 bg-purple-800 rounded text-white mt-8 font-medium hover:bg-purple-800/95 active:bg-purple-800 ">
					Login
				</button>
			)}
			{error && (
				<div className="flex space-x-2 mt-12 text-red-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1.5}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<p className="text-sm font-medium">{error}</p>
				</div>
			)}
		</form>
	);
}
