import { useState, useEffect } from 'react'
import Card from './card'

import img0 from './assets/flower0.png'
import img1 from './assets/flower1.png'
import img2 from './assets/flower2.png'
import img3 from './assets/flower3.png'
import img4 from './assets/flower4.png'
import img5 from './assets/flower5.png'
import img6 from './assets/flower6.png'
import img7 from './assets/flower7.png'
import img8 from './assets/flower8.png'
import img9 from './assets/flower9.png'

export default function Body() {
    const [score, setScore] = useState({
        current: 0,
        best: 0,
    })
    const [cardsList, setCardsList] = useState([
        {
            id: 0,
            src: img0,
            clicked: false,
        },
        {
            id: 1,
            src: img1,
            clicked: false,
        },
        {
            id: 2,
            src: img2,
            clicked: false,
        },
        {
            id: 3,
            src: img3,
            clicked: false,
        },
        {
            id: 4,
            src: img4,
            clicked: false,
        },
        {
            id: 5,
            src: img5,
            clicked: false,
        },
        {
            id: 6,
            src: img6,
            clicked: false,
        },
        {
            id: 7,
            src: img7,
            clicked: false,
        },
        {
            id: 8,
            src: img8,
            clicked: false,
        },
        {
            id: 9,
            src: img9,
            clicked: false,
        },
    ])

    const shuffle = () => {
        let arr = [...cardsList]
        let i = arr.length - 1
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        setCardsList(arr)
    }

    const handleClick = (e) => {
        shuffle()
        console.log({ ...score })
        if (e.target.className === 'false') {
            setScore((prevScore) => {
                const newCurrent = prevScore['current'] + 1
                let newBest = prevScore['best']
                if (newCurrent > prevScore['best']) {
                    newBest = newCurrent
                } 
                return { current: newCurrent, best: newBest }
            })

            setCardsList((prevCardsList) =>
                prevCardsList.map((obj) =>
                    obj.id === +e.target.id ? { ...obj, clicked: true } : obj
                )
            )
        } else if (e.target.className === 'true') {
            setScore((prevScore) => ({ ...prevScore, current: 0 }))
            setCardsList((prevCardsList) =>
                prevCardsList.map((obj) => {
                    return { ...obj, clicked: false }
                })
            )
        }
    }

    return (
        <div id="body">
            <div>
                <span id="current-score">
                    Current Score: {score['current']}
                </span>
                <span id="best-score">Best Score: {score['best']}</span>
            </div>
            {cardsList.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    src={card.src}
                    onClick={handleClick}
                    clicked={card.clicked}
                />
            ))}
        </div>
    )
}
