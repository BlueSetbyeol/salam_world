import "./navbar.css";
import logonav from "../assets/images/langues.png";

export default function NavBar() {
	return (
		<nav>
			<img id="logonav" src={logonav} alt="logo nav" />
			<ul>
				<li>Accueil</li>
				<li>About Us</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
}
