import { useState } from "react";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onFormSubmit = (e) => {
		e.preventDefault();
		console.log(username);
		console.log(password);
		setUsername("");
		setPassword("");
	};

	return (
		<form
			className="mt-28 max-w-xs mx-auto accent-purple-800"
			onSubmit={onFormSubmit}
		>
			<div className="flex flex-col justify-center">
				<label className="mr-5" htmlFor="username">
					Username
				</label>
				<input
					className="border py-3 px-3 bg-slate-50 text-gray-500"
					type="text"
					onChange={(e) => setUsername(e.target.value.trim())}
					value={username}
					name="username"
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
			<button className="py-3 px-9 bg-purple-800 rounded text-white mt-8 font-medium hover:bg-purple-800/95 active:bg-purple-800 ">
				Login
			</button>
		</form>
	);
}
