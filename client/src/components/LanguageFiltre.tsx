import { useEffect, useState } from "react";

interface languageProps {
    id:number;
    language:string;
}

export default function LanguageFiltre () {
    const [languages, setLanguages] = useState<languageProps[]>([]);
    useEffect(() => {
        fetch("http://localhost:3310/api/translate")
        .then((res) => res.json())
        .then((data) => setLanguages(data))
        .catch((err) => console.error(err));
    }, []);

    return (

        <label> 
            Choisissez une langue :
            <select >
                {languages.map((langue) => (
                    <option value={langue.language} key={langue.id}> {langue.language} </option>
                )) }
            </select>
        </label>
    )
}