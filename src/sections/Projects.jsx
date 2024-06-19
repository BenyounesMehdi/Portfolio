import { SecondCard } from "../components/Card";
import { PROJECTS } from "../constants/constants"
import { motion } from "framer-motion";

export default function Projects () {

    const projects = PROJECTS ;

    return (
        <div id="Projects" className="mb-5">
            <motion.p 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                className="text-white text-4xl text-center mt-32 mb-10"
            >
                Projects
            </motion.p>
            <div className="flex flex-col justify-center items-center gap-10">
                {
                    projects.map(({title, image, description, technologies}, key) => {
                        return <SecondCard 
                            key={key}
                            title={title} 
                            image={image} 
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