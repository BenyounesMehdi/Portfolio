import Card from '../components/Card'
import { EXPERIENCES } from '../constants/constants'
import { motion } from 'framer-motion';

export default function Experiences () {

    const experiences = EXPERIENCES ;

    return(
        <div id="Experiences" className='mb-5 mt-16 container mx-auto px-5 overflow-hidden'>
            <motion.p 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                className="text-white text-4xl text-center mt-32 mb-10"
            >
                Experiences
            </motion.p>
            <div className="flex flex-col justify-center items-center gap-8">
                {
                    experiences.map(({year, role, company, description, technologies}, key) => {
                        return <Card 
                            className="text-white"
                            key={key}
                            year={year} 
                            role={role} 
                            company={company}
                            description={description}  
                            technologies={technologies}  
                            delay={key+1}
                        />
                    })
                }
            </div>
        </div>
    )
}