import { motion } from "framer-motion"

const cardAnimation = ({ initialOpacity, initialX, animateOpacity, animateX, duration, delay }) => ({
    initial: {
        opacity: initialOpacity,
        x: initialX,
    },
    animate: {
        opacity: animateOpacity,
        x: animateX,
        transition: { duration, delay },
    },
});

const secondCardAnimation = ({ initialOpacity, initialY, animateOpacity, animateY, duration, delay }) => ({
    initial: {
        opacity: initialOpacity,
        y: initialY,
    },
    animate: {
        opacity: animateOpacity,
        y: animateY,
        transition: { duration, delay },
    },
});

/* eslint-disable react/prop-types */
function Card ({year, role, company, description, technologies, delay}) {

    const yearAnimation = cardAnimation({
        initialOpacity: 0,
        initialX: -100,
        animateOpacity: 1,
        animateX: 0,
        duration: 0.5,
        delay: delay
    });

    const contentAnimation = cardAnimation({
        initialOpacity: 0,
        initialX: 100,
        animateOpacity: 1,
        animateX: 0,
        duration: 0.5,
        delay: delay  
    });

    return (
        <div className="flex flex-col md:flex-row justify-evenly px-5">
            <div className="w-full md:w-1/3 ">
                <motion.p
                    variants={yearAnimation}
                    initial= "initial"
                    whileInView= "animate"
                    className="text-neutral-500 font-semibold"
                >
                    {year}
                </motion.p>
            </div>
            <motion.div 
                variants={contentAnimation}
                initial= "initial"
                whileInView= "animate"
                className="w-full md:w-2/3">
                <p className="font-semibold text-2xl mb-2 text-white">{role} - {company}</p>
                <p className="text-neutral-400 font-semibold ">{description}</p>
                <div className="flex gap-2 mt-3">
                    {technologies.map((tech, key) => {
                        return <div key={key} className="text-purple-400 font-semibold px-2 py-1 rounded-lg bg-neutral-700">{tech}</div>
                    })}
                </div>
            </motion.div>
        </div>
    )
}

function SecondCard ({title, image, description, technologies, delay}) {

    const projectsAnimation = secondCardAnimation({
        initialOpacity: 0,
        initialY: 100,
        animateOpacity: 1,
        animateY: 0,
        duration: 0.5,
        delay: delay  
    });

    return (
        <motion.div 
            variants={projectsAnimation}
            initial= "initial"
            whileInView= "animate"
            className="text-neutral-500 font-semibold flex flex-col md:flex-row justify-evenly px-5 gap-10 w-3/4 container mx-auto">
            <div className="w-full md:w-1/3 flex justify-start ">
                <img src={image} className="w-64 rounded-lg object-cover" />
            </div>
            <div className="w-full md:w-2/3">
                <p className="font-semibold text-2xl mb-2 text-white">{title}</p>
                <p className="text-neutral-400 font-semibold ">{description}</p>
                <div className="flex gap-2 mt-3">
                    {technologies.map((tech, key) => {
                        return <div key={key} className="text-purple-400 font-semibold px-2 py-1 rounded-lg bg-neutral-700">{tech}</div>
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default Card;
export {SecondCard};