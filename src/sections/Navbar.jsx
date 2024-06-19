import { Link } from 'react-scroll'
import  Logo  from '../assets/images/Profile/kevinRushLogo.png'
import { motion } from 'framer-motion'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import NavbarMobile from '../components/NavbarMobile';

const navAnimation = (delay) => ({
    initial: {opacity: 0, x: 100},
    animate: {
        opacity: 1, 
        x: 0, 
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
})

export default function Navbar () {

    const navList = [
        {
            link: "About", 
            offset: -80
        },
        {
            link: "Technologies", 
            offset: -22
        },
        {
            link: "Experiences", 
            offset: 45
        },
        {
            link: "Projects", 
            offset: -80
        },
        {
            link: "Contact", 
            offset: -80
        },
    ]

    const displayLinks = () => {
        return navList.map(({link, offset}, key) => {
            return (
                <motion.li
                    variants={navAnimation(key)}
                    initial= "initial"
                    animate= "animate" 
                    key={key} 
                    className='cursor-pointer hover:text-purple-300'>
                    <Link 
                        to={link}
                        smooth={true} 
                        offset={offset} 
                        duration={500} 
                    >
                        {link}
                    </Link>
                </motion.li>
            )
        })
    }

    const [isOpened, setIsOpened] = useState(false)

    const handleMenu = () => {
        setIsOpened(!isOpened)
    }   

    const toggleMenu = () => {
        return !isOpened
        ? <GiHamburgerMenu onClick={handleMenu} className='text-2xl text-white hover:text-neutral-500 cursor-pointer'/>
        : <MdClose onClick={handleMenu} className='text-2xl text-white hover:text-neutral-500 cursor-pointer ' />
    }

    return (
        <>
            <div className='bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(50,50,50,0.4),rgba(50,50,50,0.4),rgba(50,50,50,0.4))] border-b border-neutral-500 w-full py-5 shadow-md flex justify-between items-center px-5 fixed top-0 '>
                    <div className='md:ml-10'>
                        <img src={Logo} className='w-10'/>
                    </div>
                    <div className='hidden md:block mr-12'>
                        <div className='text-white list-none font-semibold flex gap-4 '>
                            {displayLinks()}
                        </div>
                    </div>
                    <div className='block md:hidden'>
                        {toggleMenu()}
                    </div>
            </div>

            <NavbarMobile isOpened={isOpened} displayLinks={displayLinks()} />
        </>

    )
}