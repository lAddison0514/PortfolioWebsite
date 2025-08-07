import "./FrontCardInfo.css"

import {motion} from "motion/react";


const FrontCardInfo = ({cardInfo, animState, infoVariants, openModal}) => {

    return (

        <motion.div className="frontCardBase" animate={animState} variants={infoVariants}>
            <motion.div className="frontCardBase" whileHover="hover" whileTap="click" onClick={openModal}>
                <motion.img variants={imgVariants} className="frontCardImg" src={cardInfo.imgLocation === "" ? "imgs/portfolio/temp_logo_16_9.jpg" : cardInfo.imgLocation} alt="" />
                <h1 className="frontCardText" style={{fontSize: "32px"}}>{cardInfo.title}</h1>
                <h1 className="frontCardText">{cardInfo.dates}</h1>
            </motion.div>
        </motion.div>
    )
}

const imgVariants = {
    hover: {
        width: "100%",
        marginBottom: "-120px"
    },
    click: {
        width: "95%",
        marginBottom: "-120px"
    }
}

export default FrontCardInfo