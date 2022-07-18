import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/Signup" element={<Signup />} />

				{/* If route does not match, show the following. */}
				<Route
					path="*"
					element={
						<p
							style={{
								textAlign: "center",
								marginTop: "5rem",
								fontSize: "1.3125rem",
							}}
						>
							404: Nothing found at this link.
						</p>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
