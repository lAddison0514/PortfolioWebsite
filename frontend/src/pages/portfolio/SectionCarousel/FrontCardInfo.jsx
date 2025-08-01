import "./FrontCardInfo.css"

import {motion} from "motion/react";


const FrontCardInfo = ({cardInfo, animState, infoVariants, openModal}) => {

    return (
        <motion.div className="frontCardBase" animate={animState} variants={infoVariants}>
            <img className="frontCardImg" src={`../../../../${cardInfo.imgLocation === "" ? "imgs/portfolio/temp_logo_16_9.jpg" : cardInfo.imgLocation}`} alt="" />
            <h1 className="frontCardText" style={{fontSize: "32px"}}>{cardInfo.title}</h1>
            <h1 className="frontCardText">{cardInfo.dates}</h1>
            <motion.button className="moreButton" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={openModal}>MORE</motion.button>
        </motion.div>
    )
}

export default FrontCardInfo