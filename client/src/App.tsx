import "./App.css";
import LanguageFiltre from "./components/LanguageFiltre";

function App() {
	return (
		<>
			<header>
				<h1 className="logo">Salam World</h1>
			</header>

			<nav className="navbar">
				<ul>
					<li>Apprendre à dire bonjour</li>
				</ul>
			</nav>

			<main className="text-box">
				<p>Que voulez vous dire ?</p>
				<LanguageFiltre/>
				
			</main>

			<footer>Développé par la Salam World Team</footer>
		</>
	);
}

export default App;
