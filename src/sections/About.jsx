import AboutImg from '../assets/images/Profile/about.jpg'
import { motion } from 'framer-motion'
import { ABOUT_TEXT } from '../constants/constants'

export default function About () {
    return (
        <div id="About" className="mt-32 mb-5 container mx-auto px-10 w-10/12">
            <motion.p 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                className="text-white text-4xl text-center mb-10">About 
                <span className="text-neutral-500"> Me</span>
            </motion.p>
            <div className='flex flex-col lg:flex-row justify-center items-center '>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <motion.img
                        initial={{opacity: 0, x: -100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 1}}
                        src={AboutImg} className="w-96 rounded-lg" />
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.p 
                        initial={{opacity: 0, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 1.5}}
                        className="text-white mt-10 text-start font-semibold leading-6 "
                        >{ABOUT_TEXT}
                    </motion.p>
                </div>
            </div>
            
        </div>
    )
}