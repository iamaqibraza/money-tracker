import { useState } from "react";
import { useEmail } from "../../hooks/useEmail";

export default function Feedback() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [contact, setContact] = useState("");
	const [message, setMessage] = useState("");
	const { isPending, error, success, sendEmail } = useEmail();

	const onFormSubmit = async (e) => {
		e.preventDefault();
		sendEmail({ name, email, contact, message });
		if (success) {
			setName("");
			setEmail("");
			setContact("");
			setMessage("");
		}
	};

	return (
		<form
			className="mt-20 max-w-xs mx-auto accent-purple-800"
			onSubmit={onFormSubmit}
		>
			<h1 className="font-bold text-2xl text-gray-800">
				Provide Feedback
			</h1>
			<div className="flex flex-col justify-center mt-6">
				<label className="mr-5" htmlFor="name">
					Name:
				</label>
				<input
					className="border py-3 px-3 bg-slate-50 text-gray-500"
					type="text"
					onChange={(e) => setName(e.target.value.trim())}
					value={name}
					name="name"
					required
				/>
			</div>

			<div className="flex flex-col justify-center mt-5">
				<label className="mr-5" htmlFor="email">
					Email:
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
				<label className="mr-5" htmlFor="contact">
					Phone Number:
				</label>
				<input
					className="border py-3 px-3 bg-slate-50 text-gray-500"
					type="contact"
					onChange={(e) => setContact(e.target.value.trim())}
					value={contact}
					name="contact"
					required
				/>
			</div>

			<div className="flex flex-col justify-center mt-5">
				<label className="mr-5" htmlFor="message">
					Message:
				</label>
				<textarea
					rows="4"
					className="border py-3 px-3 bg-slate-50 text-gray-500"
					type="text"
					onChange={(e) => setMessage(e.target.value)}
					value={message}
					name="message"
					required
				/>
			</div>

			{isPending ? (
				<button
					disabled
					className="py-3 px-9 bg-purple-800 rounded text-white mt-9 font-medium hover:bg-purple-800/95 active:bg-purple-800 "
				>
					Loading ...
				</button>
			) : (
				<button className="py-3 px-9 bg-purple-800 rounded text-white mt-9 font-medium hover:bg-purple-800/95 active:bg-purple-800 ">
					Send Feedback
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
