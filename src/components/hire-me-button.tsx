"use client";

import { useRef, useState } from "react";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

// Define the type for the props of CVButton
interface HireMeButtonProps {
    targetText: string;
}

const HireMeButton: React.FC<HireMeButtonProps> = ({ targetText }) => {
const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
const [text, setText] = useState(targetText);

const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
        const scrambled = targetText.split("")
            .map((char, index) => {
                if (pos / CYCLES_PER_LETTER > index) {
                    return char;
                }

                const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                const randomChar = CHARS[randomCharIndex];

                return randomChar;
            })
            .join("");

        setText(scrambled);
        pos++;

        if (pos >= targetText.length * CYCLES_PER_LETTER) {
            stopScramble();
        }
    }, SHUFFLE_TIME);
};

const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(targetText);
};

const goToLinkedin = () => {
    window.open("https://www.linkedin.com/in/farisfaikar", "_blank");
}

return (
    <motion.button
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
        onMouseEnter={scramble}
        onMouseLeave={stopScramble}
        onClick={goToLinkedin}
        className="group relative overflow-hidden rounded-lg border-[1px] dark:border-neutral-500 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors dark:hover:text-blue-300 w-full md:w-auto border-neutral-950 -mt-5"
    >
        <div className="relative z-10 flex items-center justify-center gap-2 text-neutral-950 dark:text-neutral-300">
            <FaCode />
            <span>{text}</span>
        </div>
    </motion.button>
);
};

export default HireMeButton;
