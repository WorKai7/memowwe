import Grid from "../components/Grid";
import { useState } from "react";
import { shuffle } from "../utils/shuffle";
import { motion } from "motion/react"
import "./styles/GamePage.css"

export default function GamePage() {
    const [cards, setCards] = useState(shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]))
    const [clicked, setClicked] = useState([])
    const [found, setFound] = useState([])

    function handleClick(value, index) {
        if (clicked.includes(index)) {
            return
        }

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
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 0.8 }}
                >
                    Bienvenue dans le memory de zinzin avec john cena et the rock les goats
                </motion.h1>

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