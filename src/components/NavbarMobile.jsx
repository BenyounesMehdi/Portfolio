/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";

const animation = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 200, transition: { duration: 0.5 } }
};

export default function NavbarMobile({ isOpened, displayLinks }) {
    return (
        <AnimatePresence>
            {isOpened && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={animation}
                    className='fixed md:hidden top-20 left-12 right-12 flex items-center justify-center'>
                    <div className='bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(50,50,50,1),rgba(50,50,50,1),rgba(50,50,50,1))] drop-shadow-md flex flex-col justify-center w-full mx-auto rounded-md list-none text-white font-semibold gap-3'>
                        <ul className='w-full flex flex-col items-center gap-2 py-2'>
                            {displayLinks}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
