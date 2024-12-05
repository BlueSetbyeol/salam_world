import { useEffect, useState } from "react";

interface languageProps {
	id: number;
	language: string;
}

const [languages, setLanguages] = useState<languageProps[]>([]);
useEffect(() => {
	fetch("http://localhost:3310/api/translate")
		.then((res) => res.json())
		.then((data) => setLanguages(data))
		.catch((err) => console.error(err));
}, []);

export default function GuessTheWorld() {
	return <></>;
}
