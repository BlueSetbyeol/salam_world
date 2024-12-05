export default function LanguageFiltre () {
const langues = [
    {
        id:1,
        langue:"français",
    },
    {
        id:2,
        langue:"Anglais",
    }, 
    {
        id:3,
        langue:"Espagnol",
    },
      {
        id:4,
        langue:"Arabe",
    },
      {
        id:5,
        langue:"Italien",
    },
      {
        id:6,
        langue:"Portugais",
    },
      {
        id:7,
        langue:"Coréen",
    },
      {
        id:8,
        langue:"Allemand",
    }
]
    return (

        <label> 
            Choisissez une langue :
            <select >
                {langues.map((langue) => (
                    <option value={langue.langue} key={langue.id}> {langue.langue} </option>
                )) }
            </select>
        </label>
    )
}