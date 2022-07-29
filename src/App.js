import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Feedback from "./pages/feedback/Feedback";

function App() {
	const { authIsReady, user } = useAuthContext();

	return (
		<div className="App">
			{authIsReady && (
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={user ? <Home /> : <Login />} />
						<Route
							path="/login"
							element={
								user ? <Navigate to="/" replace /> : <Login />
							}
						/>
						<Route
							path="/Signup"
							element={
								user ? <Navigate to="/" replace /> : <Signup />
							}
						/>

						<Route
							path="/feedback"
							element={
								user ? (
									<Feedback />
								) : (
									<Navigate to="/login" replace />
								)
							}
						/>

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
