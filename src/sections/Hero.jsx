import { HERO_CONTENT } from "../constants/constants"
import { motion } from 'framer-motion'
import Profile from '../assets/images/Profile//kevinRushProfile.jpg'

const animation = (delay) => ({
        initial: {opacity: 0, x: -100}, 
        animate: {
            opacity: 1, 
            x: 0,
            transition: {duration: 0.5, delay: delay}
        }
}) ;

export default function Hero () {
    return (
        <div className="mt-32  px-5 container mx-auto flex flex-col md:flex-row justify-center items-center gap-5 md:gap-2">
            <div className="w-full md:w-1/2">
                <motion.p
                 variants={animation(0.5)}
                 initial="initial"
                 whileInView="animate"
                 className="text-white text-7xl font-light font-sans"
                 >Kevin Rush</motion.p>
                <motion.p 
                    variants={animation(1)}
                    initial="initial"
                    whileInView="animate"
                    className="text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text tracking-tight mt-10 text-3xl">Full Stack Developer
                </motion.p>
                <motion.p 
                    variants={animation(1.5)}
                    initial="initial"
                    whileInView="animate"
                    className="text-white mt-10 text-start font-semibold leading-6"
                >{HERO_CONTENT}
                </motion.p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <motion.img 
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: 2}}
                    src={Profile} className="w-96 rounded-lg text-xl" />
            </div>
        </div>
    )
}