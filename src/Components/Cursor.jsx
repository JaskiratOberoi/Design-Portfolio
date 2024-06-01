import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion/dist/framer-motion";

function Cursor() {
    const[mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {

        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12
        }
    }
  return (
    <motion.div className='cursor'
    variants={variants}
    animate={cursorVariant}
    />
  )
}

export default Cursor