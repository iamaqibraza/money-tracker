import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
	const { authIsReady } = useAuthContext();

	return (
		<div className="App">
			{authIsReady && (
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/Signup" element={<Signup />} />

						{/* If route does not match, show the following. */}
						<Route
							path="*"
							element={
								<h1 className="text-purple-800 text-3xl text-center mt-16 w-4/5 mx-auto font-medium">
									404: Nothing found at this link.
								</h1>
							}
						/>
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
