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
					<option value=""> Select </option>
					{languages.map(
						(langue) =>
							langue.language !== "Français" && (
								<option value={langue.language} key={langue.id}>
									{langue.language}
								</option>
							),
					)}
				</select>
			</div>
			<div id="total">
				{languages
					.filter((langue) => langue.language === choice)
					.map((langue) => (
						<div key={langue.id}>
							{" "}
							<div id="general">
								<div id="image">
									<img src={langue.flag} alt="flag" />
								</div>
								<div id="para">
									<div id="colonne1">
										<p>
											<span>Bonjour :</span> {langue.sentences.greeting}{" "}
										</p>
										<p>
											<span>Au revoir :</span> {langue.sentences.goodbye}{" "}
										</p>
										<p>
											<span>S'il vous plait :</span> {
												langue.sentences.please
											}{" "}
										</p>
										<p>
											<span>Merci : </span>
											{langue.sentences.thankYou}{" "}
										</p>
										<p>
											<span>Oui : </span>
											{langue.sentences.yes}{" "}
										</p>
										<p>
											<span>Non : </span>
											{langue.sentences.no}{" "}
										</p>
										<p>
											<span>Excusez moi : </span>
											{langue.sentences.excuseMe}{" "}
										</p>
										<p>
											<span>Pardon : </span>
											{langue.sentences.sorry}{" "}
										</p>
										<p>
											<span>Combien :</span>
											{langue.sentences.howMuch}{" "}
										</p>
										<p>
											<span>Où est-ce ? :</span>
											{langue.sentences.whereIs}{" "}
										</p>
									</div>
									<div id="colonne2">
										<p>
											<span>Aidez moi : </span>
											{langue.sentences.help}{" "}
										</p>
										<p>
											<span>Eau : </span>
											{langue.sentences.water}{" "}
										</p>
										<p>
											<span>Nourriture : </span>
											{langue.sentences.food}{" "}
										</p>
										<p>
											<span>Hotel : </span>
											{langue.sentences.hotel}{" "}
										</p>
										<p>
											<span>Bus : </span>
											{langue.sentences.bus}{" "}
										</p>
										<p>
											<span>Taxi : </span>
											{langue.sentences.taxi}{" "}
										</p>
										<p>
											<span>Train : </span>
											{langue.sentences.train}{" "}
										</p>
										<p>
											<span>Rue : </span>
											{langue.sentences.street}{" "}
										</p>
										<p>
											<span>Toilette : </span>
											{langue.sentences.bathroom}{" "}
										</p>
										<p>
											<span>Je suis perdu : </span>
											{langue.sentences.IAmLost}{" "}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</label>
	);
}
