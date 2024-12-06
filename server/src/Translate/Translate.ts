// Some data to make the trick

const survivor = [
	{
		id: 1,
		language: "Anglais",
		flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/167px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
		sentences: {
			greeting: "Hello!",
			goodbye: "Goodbye!",
			please: "Please",
			thankYou: "Thank you",
			yes: "Yes",
			no: "No",
			excuseMe: "Excuse me",
			sorry: "Sorry",
			howMuch: "How much?",
			whereIs: "Where is it?",
			help: "Help",
			water: "Water",
			food: "Food",
			hotel: "Hotel",
			bus: "Bus",
			taxi: "Taxi",
			train: "Train",
			street: "Street",
			bathroom: "Bathroom",
			IAmLost: "I am lost",
		},
	},
	{
		id: 2,
		language: "Espagnol",
		flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/150px-Flag_of_Spain.svg.png",
		sentences: {
			greeting: "¡Hola!",
			goodbye: "¡Adiós!",
			please: "Por favor",
			thankYou: "Gracias",
			yes: "Sí",
			no: "No",
			excuseMe: "Perdón",
			sorry: "Lo siento",
			howMuch: "¿Cuánto cuesta?",
			whereIs: "¿Dónde está?",
			help: "Ayuda",
			water: "Agua",
			food: "Comida",
			hotel: "Hotel",
			bus: "Autobús",
			taxi: "Taxi",
			train: "Tren",
			street: "Calle",
			bathroom: "Baño",
			IAmLost: "Estoy perdido",
		},
	},
	{
		id: 3,
		language: "Italien",
		flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/150px-Flag_of_Italy.svg.png",
		sentences: {
			greeting: "Ciao!",
			goodbye: "Arrivederci!",
			please: "Per favore",
			thankYou: "Grazie",
			yes: "Sì",
			no: "No",
			excuseMe: "Scusa",
			sorry: "Mi dispiace",
			howMuch: "Quanto costa?",
			whereIs: "Dove si trova?",
			help: "Aiuto",
			water: "Acqua",
			food: "Cibo",
			hotel: "Hotel",
			bus: "Autobus",
			taxi: "Taxi",
			train: "Treno",
			street: "Strada",
			bathroom: "Bagno",
			IAmLost: "Mi sono perso",
		},
	},
	{
		id: 4,
		language: "Marocain",
		flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/150px-Flag_of_Morocco.svg.png",
		sentences: {
			greeting: "Salam 3alaykum",
			goodbye: "Bslama",
			please: "Aafak",
			thankYou: "Choukran",
			yes: "Iyyeh",
			no: "La",
			excuseMe: "Smah li",
			sorry: "Sam7a",
			howMuch: "Bsh7al?",
			whereIs: "Fin kayn?",
			help: "3awnini",
			water: "Lma",
			food: "Makla",
			hotel: "Funduq",
			bus: "Autobus",
			taxi: "Taxi",
			train: "Tqatar",
			street: "Zou9a",
			bathroom: "Toilettes",
			IAmLost: "Ana t3e9dit",
		},
	},
	{
		id: 5,
		language: "Coréen",
		flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/150px-Flag_of_South_Korea.svg.png",
		sentences: {
			greeting: "안녕하세요! (Annyeonghaseyo!)",
			goodbye: "안녕히 가세요! (Annyeonghi gaseyo!)",
			please: "제발 (Jebal)",
			thankYou: "감사합니다 (Gamsahamnida)",
			yes: "네 (Ne)",
			no: "아니요 (Aniyo)",
			excuseMe: "실례합니다 (Sillyehamnida)",
			sorry: "죄송합니다 (Joesonghamnida)",
			howMuch: "얼마에요? (Eolmaeyo?)",
			whereIs: "어디에요? (Eodieyo?)",
			help: "도와주세요 (Dowajuseyo)",
			water: "물 (Mul)",
			food: "음식 (Eumsik)",
			hotel: "호텔 (Hotel)",
			bus: "버스 (Beoseu)",
			taxi: "택시 (Taegsi)",
			train: "기차 (Gicha)",
			street: "거리 (Geori)",
			bathroom: "화장실 (Hwajangsil)",
			IAmLost: "길을 잃었어요 (Gireul ilheosseoyo)",
		},
	},
	{
		id: 6,
		language: "Français",
		flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/150px-Flag_of_France.svg.png",
		sentences: {
			greeting: "Bonjour !",
			goodbye: "Au revoir !",
			please: "S'il vous plaît",
			thankYou: "Merci",
			yes: "Oui",
			no: "Non",
			excuseMe: "Excusez-moi",
			sorry: "Désolé",
			howMuch: "Combien ça coûte ?",
			whereIs: "Où est-ce ?",
			help: "Aidez-moi",
			water: "Eau",
			food: "Nourriture",
			hotel: "Hôtel",
			bus: "Bus",
			taxi: "Taxi",
			train: "Train",
			street: "Rue",
			bathroom: "Toilettes",
			IAmLost: "Je suis perdu",
		},
	},
	{
		id: 7,
		language: "Argo",
		flag: "https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D176631792W10000H10000/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/bouche-langue-drapeau-luxembourg-cadeau-rock-and-roll.jpg",
		sentences: {
			greeting: "Wech !",
			goodbye: "Tchao !",
			please: "Raychik",
			thankYou: "Bien vue",
			yes: "Ouai",
			no: "Laisse tomber",
			excuseMe: "Ouai-Ouai",
			sorry: "Smah",
			howMuch: "Combien ca?",
			whereIs: "C ou ?",
			help: "Depanne-moi",
			water: "De la Flotte",
			food: "Graille",
			hotel: "Hotello",
			bus: "Car",
			taxi: "Taco",
			train: "Le tchoutchou",
			street: "La calle",
			bathroom: "Les chiottes",
			IAmLost: "Je suis sur le carreau",
		},
	},
];

// Declare the action

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
	if (req.query.q != null) {
		const filteredPrograms = survivor.filter((program) =>
			program.language.includes(req.query.q as string),
		);

		res.json(filteredPrograms);
	} else {
		res.json(survivor);
	}
};

//*****************************************************

const read: RequestHandler = (req, res) => {
	const parsedId = Number.parseInt(req.params.id);

	const surviv = survivor.find((p) => p.id === parsedId);

	if (survivor != null) {
		res.json(survivor);
	} else {
		res.sendStatus(404);
	}
};

//*****************************************************

// Export it to import it somewhere else

export default { browse, read };
