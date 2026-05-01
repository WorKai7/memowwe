import { useRef } from 'react'
import './App.css'
import GamePage from './pages/GamePage'
import { motion } from "motion/react"

function App() {
    const audioRef = useRef(null)

    const startMusic = () => {
        audioRef.current.play()
    }

    return (
        <>
            <audio ref={audioRef} autoPlay loop>
                <source src="/background.mp3" type="audio/mpeg" />
            </audio>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={startMusic}
            >

            MUSIQUE !!!!

            </motion.button>

            <GamePage />
        </>
    )
}

export default App
