'use client'

import FeedbackCard from "@/components/pt/feedback-card";
import Carousel from "nuka-carousel";

const feedback = [
    {
        id: "feedback-1",
        content:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        img: "https://i.imgur.com/Dn0qoCG.png",
    },
    {
        id: "feedback-2",
        content:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        img: "https://i.imgur.com/fk8eEvW.png",
    },
    {
        id: "feedback-3",
        content:
            "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        img: "https://i.imgur.com/dLxxRDy.png",
    },
];

const Testimonials = () => (
    <section
        id="clients"
        className={`sm:py-16 py-6 flex justify-center items-center flex-col relative `}
    >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2
                className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}
            >
                What People are <br className="sm:block hidden" /> saying about us
            </h2>
            <div className="w-full md:mt-0 mt-6">
                <p
                    className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]`}
                >
                    Everything you need to accept card payments and grow your business
                    anywhere on the planet.
                </p>
            </div>
        </div>
        <Carousel autoplay autoplayInterval={3000} wrapAround={true}>
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </Carousel>
    </section>
);

export default Testimonials;