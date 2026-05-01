import "./styles/Card.css"
import { motion } from "motion/react"

export function Card({ value, onClick, shown, variants }) {
    return (
        <motion.div
            className="card-container"
            onClick={onClick}
            animate={{ rotateY: shown ? 180 : 0 }}
            transition={{ duration: 0.4 }}
            style={{ transformStyle: "preserve-3d" }}
            variants={variants}
        >
            <div className="card face">
                <h1>?</h1>
            </div>

            <div className="card back">
                <img
                    className="image"
                    src={`images/${value}.png`}
                    alt={`Image ${value}`}
                />
            </div>
        </motion.div>
    )
}