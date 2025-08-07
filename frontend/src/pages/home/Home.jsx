import './Home.css'

import {motion} from "motion/react";
import {Link} from "react-router-dom";

const Home = () => {
    return  (
        <>
        <div style={{display:"flex",flexDirection:"row", marginTop: "75px", maxWidth: "1280px"}}>
            <div style={{flex:"40%"}}>
                <h1 className="name">LOUIS ADDISON</h1>
                <motion.ul className="topicItemList"
                    initial="base"
                    animate="start"
                    variants={listVariant}>
                    <motion.li className="topicItem" variants={listItemVariant}>Graphics</motion.li>
                    <motion.li className="topicItem" variants={listItemVariant}>Engines</motion.li>
                    <motion.li className="topicItem" variants={listItemVariant}>XR</motion.li>
                    <motion.li className="topicItem" variants={listItemVariant}>Animation</motion.li>
                    <motion.li className="topicItem" variants={listItemVariant}>Games</motion.li>
                </motion.ul>
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1.2, transitionBehavior: "easeIn", delay: 1.2}}>
                    <Link className="seePortfolio" to="/portfolio">SEE PORTFOLIO {">"}</Link>
                </motion.div>
            </div>

            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <img className="homeImg" src="../../../imgs/Addison-Kaufman.jpg" />
            </div>



        </div>


        </>
    )
}

const listVariant = {
    base : {
        opacity : 0,
    },
    start: {
        opacity: 1,
        transition: {
            duration: 0.2,
            when: "beforeChildren",
            staggerChildren: 0.2,
        }
    }
}

const listItemVariant = {
    base : {
        opacity : 0,
        x: -100
    },
    start: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            transitionBehavior: "easeIn"
        }

    }
}

export default Home