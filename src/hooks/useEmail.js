import emailjs from "@emailjs/browser";
import { useState } from "react";

export const useEmail = () => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	const sendEmail = async (...args) => {
		const serviceID = process.env.REACT_APP_SERVICE_ID;
		const templateID = process.env.REACT_APP_TEMPLATE_ID;
		const publicKey = process.env.REACT_APP_PUBLIC_KEY;
		const templateParams = { ...args };
		console.log(serviceID, templateID, templateParams, publicKey);
		try {
			setIsPending(true);
			setError(null);
			const res = await emailjs.send(
				serviceID,
				templateID,
				templateParams,
				publicKey
			);
			console.log(res);
			setIsPending(false);
			setError(null);
			alert("Thank you for the feedback. We will get back to you soon.");
		} catch (error) {
			alert(error.message);
			setIsPending(false);
			setError(error.message);
		}
	};

	return { isPending, error, sendEmail };
};
