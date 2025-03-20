import { useState } from "react";
const images = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/600?random=3",
    "https://picsum.photos/800/600?random=4",
    "https://picsum.photos/800/600?random=5",
];
export default function CalendarComponent() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };
    return (
        <div className="relative w-full max-w-2xl mx-auto">
            {/* Imagen Activa */}
            <div className="relative h-64 md:h-96">
                <img
                    src={images[current]}
                    className="w-full h-full object-cover rounded-lg"
                    alt="Imagen del carrusel"
                />
            </div>

            {/* Botones de navegación */}
            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                ⬅️
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                ➡️
            </button>
        </div>
    )
}




