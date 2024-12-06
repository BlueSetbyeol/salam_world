import "./App.css";
import LanguageFiltre from "./components/LanguageFiltre";
import NavBar from "./components/navbar";

function App() {
	return (
		<>
			<NavBar />
			<header>
				<h1 className="title">Salam Alikoum World</h1>
			</header>
			<main>
				<h1>Où allons nous aujourd'hui ?</h1>
				<LanguageFiltre />
			</main>
			<footer>Développé par la Salam World Team</footer>
		</>
	);
}

export default App;
