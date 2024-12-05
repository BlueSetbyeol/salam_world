import { useEffect, useState } from "react";
import "./LanguageFiltre.css";

interface languageProps {
	id: number;
	language: string;
	flag: string;
	sentences: {
		greeting: string;
		goodbye: string;
		please: string;
		thankYou: string;
		yes: string;
		no: string;
		excuseMe: string;
		sorry: string;
		howMuch: string;
		whereIs: string;
		help: string;
		water: string;
		food: string;
		hotel: string;
		bus: string;
		taxi: string;
		train: string;
		street: string;
		bathroom: string;
		IAmLost: string;
	};
}

export default function LanguageFiltre() {
	const [choice, setChoice] = useState("");
	const [languages, setLanguages] = useState<languageProps[]>([]);
	useEffect(() => {
		fetch("http://localhost:3310/api/translate")
			.then((res) => res.json())
			.then((data) => setLanguages(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<label>
			<div id="filtre">
				Choisissez une langue :
				<select onChange={(event) => setChoice(event.target.value)}>
					<option value=""> ___ </option>
					{languages.map((langue) => (
						<option value={langue.language} key={langue.id}>
							{" "}
							{langue.language}{" "}
						</option>
					))}
				</select>
			</div>
			<main>
				{languages
					.filter((langue) => langue.language === choice)
					.map((langue) => (
						<div>
							{" "}
							<div id="general">
								<div id="image">
									<img src={langue.flag} />
								</div>
								<div id="para">
									<div id="colonne1">
										<p>Bonjour : {langue.sentences.greeting} </p>
										<p>Au revoir : {langue.sentences.goodbye} </p>
										<p> S'il vous plait : {langue.sentences.please} </p>
										<p>Merci : {langue.sentences.thankYou} </p>
										<p>Oui : {langue.sentences.yes} </p>
										<p>Non : {langue.sentences.no} </p>
										<p>Excusez moi : {langue.sentences.excuseMe} </p>
										<p>Pardon :{langue.sentences.sorry} </p>
										<p>Combien :{langue.sentences.howMuch} </p>
										<p>Où est-ce ? :{langue.sentences.whereIs} </p>
									</div>
									<div id="colonne2">
										<p>Aidez moi :{langue.sentences.help} </p>
										<p>Eau : {langue.sentences.water} </p>
										<p>Nourriture : {langue.sentences.food} </p>
										<p>Hotel : {langue.sentences.hotel} </p>
										<p>Bus : {langue.sentences.bus} </p>
										<p>Taxi : {langue.sentences.taxi} </p>
										<p>Train : {langue.sentences.train} </p>
										<p>Rue : {langue.sentences.street} </p>
										<p>Toilette : {langue.sentences.bathroom} </p>
										<p>Je suis perdu : {langue.sentences.IAmLost} </p>
									</div>
								</div>
							</div>
						</div>
					))}
			</main>
		</label>
	);
}
