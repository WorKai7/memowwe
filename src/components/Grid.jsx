import { Card } from "./Card";
import { EmptyCard } from "./EmptyCard";
import { motion } from "motion/react"
import "./styles/Grid.css"

export default function Grid({ cards, onCardClicked, clickedCards }) {
    const container = {
        visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } }
    }

    const item = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div className="grid" variants={container} initial="hidden" animate="visible">
            {cards.map((card, i) => {
                const shown = clickedCards.includes(i)

                if (card !== 0) {
                    return <Card key={i} value={card} onClick={() => onCardClicked(card, i)} shown={shown} variants={item} />
                }

                return <EmptyCard key={i} />
            })}
        </motion.div>
    )
}