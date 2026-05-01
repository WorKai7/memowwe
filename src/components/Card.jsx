import "./styles/Card.css"

export function Card({ value, onClick, shown }) {

    if (shown) {
        return (
            <div className="card">
                <img className="image" src={`images/${value}.png`} alt={`Image ${value}`} />
            </div>
        )
    }

    return (
            <div className="card" onClick={onClick}>
                <h1>?</h1>
            </div>
        )
}