import "./ExpandedCardInfo.css"
import {motion} from "motion/react";

const ExpandedCardInfo = ({cardInfo,  openModal}) => {

    return (

            <motion.div className="expandedFrontCardBase" animate="base" whileHover="hover" whileTap="click" onClick={openModal}>
                <motion.img variants={imgVariants} className="expandedFrontCardImg" src={cardInfo.imgLocation === "" ? "imgs/portfolio/temp_logo_16_9.jpg" : cardInfo.imgLocation} alt="" />
                <h1 className="expandedFrontCardText expandedTitle">{cardInfo.title}</h1>
                <h1 className="expandedFrontCardText expandedDates">{cardInfo.dates}</h1>
            </motion.div>
    )
}

const imgVariants = {
    base:  {
      width: "60%"
    },
    hover: {
        width: "90%",
        marginBottom: "-110px"
    },
    click: {
        width: "85%",
        marginBottom: "-120px"
    }
}

export default ExpandedCardInfo