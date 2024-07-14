import { useState, useEffect } from "react";
import "./Carrosel.css";

const Carrosel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);
    const items = [
        { name: "Carro 1", price: "R$ 42.999,00" },
        { name: "Carro 2", price: "R$ 42.999,00" },
        { name: "Carro 3", price: "R$ 42.999,00" },
        { name: "Carro 4", price: "R$ 42.999,00" },
        { name: "Carro 5", price: "R$ 42.999,00" },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 500) {
                setVisibleItems(1);
            } else if (window.innerWidth < 770) {
                setVisibleItems(2);
            } else {
                setVisibleItems(3);
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - visibleItems : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === items.length - visibleItems;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <div className="carousel-container">
                <div className="carousel">
                    <div className="arrow left-arrow" onClick={goToPrevious}>
                        &#9664;
                    </div>
                    <div className="carousel-content">
                        {items.slice(currentIndex, currentIndex + visibleItems).map((item, index) => (
                            <div className="box-carousel" key={index}>
                                <div className="space-carousel"></div>
                                <div className="text-carousel">
                                    <p>{item.name}</p>
                                </div>
                                <span>
                                    <p>{item.price}</p>
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="arrow right-arrow" onClick={goToNext}>
                        &#9654;
                    </div>
                </div>
                <div className="indicators">
                    {items.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${currentIndex === index ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carrosel;
