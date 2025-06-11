import React, { useEffect, useState } from "react";

const StarBackground = () => {
    const [star, setStar] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [])
    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 9000
        );
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2

            });
        }
        setStar(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 4 + 2

            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {star.map((s) => (
                <div
                    key={s.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: s.size + "px",
                        height: s.size + "px",
                        left: s.x + "%",
                        top: s.y + "%",
                        opacity: s.opacity,
                        animationDuration: s.animationDuration + "s",
                    }}
                />
            ))}
            {meteors.map((s) => (
                <div
                    key={s.id}
                    className="meteor animate-meteor"
                    style={{
                        width: s.size * 40 + "px",
                        height: s.size * 2 + "px",
                        left: s.x + "%",
                        top: s.y + "%",
                        animationDelay: s.delay,
                        animationDuration: s.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
}

export default StarBackground;