import { CONTACT } from '../constants/constants'
import { motion } from 'framer-motion';
import { FaGithub,FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";


const animation = (delay) => ({
    initial: {opacity: 0, y: 100}, 
    animate: {
        opacity: 1, 
        y: 0,
        transition: {duration: 0.5, delay: delay}
    }
}) ;

export default function Contact () {

    const {address, phoneNo, email} = CONTACT ;

    const contactInformations = [
        {
            info: address,
            delay: 1
        },
        {
            info: phoneNo,
            delay: 1.5
        },
        {
            info: email,
            delay: 2
        },
    ]

    return (
        <div id="Contact" className="container mx-auto text-white text-center mt-44 mb-10 py-10">
            <motion.p 
                variants={animation(0.5)}
                initial= "initial"
                whileInView= "animate"
                className="text-4xl mb-10"
            >
                Get in Touch
            </motion.p>
            <div className='flex flex-col gap-5 font-semibold'>
                {contactInformations.map(({info, delay}) => {
                    return <motion.p
                                variants={animation(delay)}
                                initial= "initial"
                                whileInView= "animate"
                                key={delay}
                            >
                                {info}
                            </motion.p>
                })}
            </div>
            <motion.div
                initial= {{opacity: 0, y: 100}}
                whileInView= {{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 2.5}}
                className='mt-5 flex justify-center items-center text-2xl gap-3 cursor-pointer'>
                <FaGithub />
                <FaTwitter />
                <FaLinkedin />
                <FaInstagram />
            </motion.div>
        </div>
    )
}