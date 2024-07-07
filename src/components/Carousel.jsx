import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/1500610/pexels-photo-1500610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: `"Learn, quiz, conquer."`,
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/7776203/pexels-photo-7776203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: `"Knowledge in every question."`,
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/10774602/pexels-photo-10774602.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      content: `"Quizzes sharpen minds."`,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden relative rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 h-96 relative">
              <img
                src={slide.imageUrl}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-600 bg-opacity-30">
                <p className="text-white text-xl md:text-4xl font-medium text-center">
                  {slide.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="hidden" onClick={prevSlide}>
          Prev
        </button>
        <button className="hidden" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
