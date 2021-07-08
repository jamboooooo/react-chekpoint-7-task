import { useState } from "react"

function Heroes() {
    const heroes = [
        'Шерлок Холмс',
        'Доктор Ватсон',
        'Профессор Мариарти',
        'Миссис Хадсон',
        'Ирен Адлер'
    ]

    const [names, setNames] = useState(heroes)

    const handleDelete = (index) => {
        const data = names.filter((name, i) => {
            if(i !== index){
                return name
            }
        })
        setNames(data)
    }

    return <ul>
        {names.map((name, i) =>{
            return <li 
            key={i}
            onClick={()=> handleDelete(i)}
            >{name}</li>
        })}
    </ul>
}

export default Heroes