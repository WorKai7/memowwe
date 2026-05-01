import { Card } from "./Card";
import { EmptyCard } from "./EmptyCard";
import "./styles/Grid.css"

export default function Grid({ cards, onCardClicked, clickedCards }) {
    return (
        <div className="grid">
            {cards.map((card, i) => {
                const shown = clickedCards.includes(i)

                if (card !== 0) {
                    return <Card key={i} value={card} onClick={() => onCardClicked(card, i)} shown={shown} />
                }

                return <EmptyCard key={i} />
            })}
        </div>
    )
}