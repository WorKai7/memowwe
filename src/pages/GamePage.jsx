import Grid from "../components/Grid";
import { useState } from "react";
import { shuffle } from "../utils/shuffle";
import "./styles/GamePage.css"

export default function GamePage() {
    const [cards, setCards] = useState(shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]))
    const [clicked, setClicked] = useState([])
    const [found, setFound] = useState([])

    function handleClick(value, index) {
        if (found.includes(value)) {
            return
        }

        if (clicked.length >= 2) {
            return
        }

        if (clicked.length === 0) {
            setClicked([index])
        } else {
            setClicked([
                ...clicked,
                index
            ])

            if (cards[clicked[0]] === value) {
                setTimeout(() => {
                    setFound([
                        ...found,
                        value
                    ])
                    setCards(cards.map((card) => {
                        if (card === value) {
                            return 0
                        }

                        return card
                    }))
                }, 650);
            }
            setTimeout(() => {
                setClicked([])
            }, 1000);
        }
    }

    if (found.length < 9) {
        return (
            <>
                <h1>Bienvenue dans le memory de zinzin avec john cena et the rock les goats</h1>
                <Grid cards={cards} onCardClicked={handleClick} clickedCards={clicked} />
            </>
        )
    }

    return (
        <>
            <h1>ET C'EST GAGNÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉ</h1>   
        </>
    )
}