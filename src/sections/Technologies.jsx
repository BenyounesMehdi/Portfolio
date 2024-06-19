import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { motion } from 'framer-motion'

export default function Technologies () {
     

    const icnosAnimationDuration = [2.5, 3, 5, 2, 6, 4] ;

    const iconAnimation = (duration) => ({
        initial: {y: -10},
        animate: {
            y: [-10, 10],
            transition: {
                duration: duration,
                ease: "linear", 
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    })

    const technologiesList = [
        {
            icon: <RiReactjsLine />,
            color: "text-cyan-400"
        } ,
        {
            icon: <TbBrandNextjs />,
            color: "text-white"
        } ,
        {
            icon: <SiMongodb />,
            color: "text-green-500"
        } ,
        {
            icon: <DiRedis />,
            color: "text-red-700"
        } ,
        {
            icon: <FaNodeJs />,
            color: "text-green-500"
        } ,
        {
            icon: <BiLogoPostgresql />,
            color: "text-sky-700"
        } 
    ]

    const displayTechnologies = () => {
        return (
            technologiesList.map(({icon, color}, index) => {
                const duration = icnosAnimationDuration[index];
                return (
                    <motion.div
                        variants={iconAnimation(duration)} 
                        initial= "initial"
                        animate= "animate"
                        key={index} 
                        className={`${color} w-fit text-7xl border-4 border-neutral-800 p-3 rounded-2xl`}>
                        {icon}
                    </motion.div>
                )
            })
        )
    }

    return (
        <div id="Technologies" className='mb-5 overflow-hidden py-20'>
            <motion.p 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                className="text-white text-4xl text-center mt-32 mb-10"
            >
                Technologies
            </motion.p>
            <motion.div 
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.5, delay: 1}}
                className='flex justify-center items-center flex-wrap container mx-auto gap-2 '>
                {displayTechnologies()}
            </motion.div>
        </div>
    )
}
