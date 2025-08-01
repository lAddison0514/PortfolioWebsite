import "./PageTopper.css"
import {easeIn, easeOut} from "framer-motion";
import {motion, useScroll} from "motion/react";

const PageTopper = ({srcImage, imgPos, title}) => {
    const { scrollY } = useScroll()

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <img className="pageImg" style={{objectPosition: `0px ${imgPos}%`}} src={srcImage} alt=""/>
            <motion.div variants={backdropVariant}
                        initial="closed"
                        animate="open"
                        className="backdrop" />
            <h1 className="pageTopperText">{title}</h1>
        </div>
    )
}

const backdropVariant = {
    closed: {
        height: "320px",
        transition: {
            duration: 1,
            transitionBehavior: easeOut
        }
    },
    open: {
        height: "auto",
        transition: {
            duration: 1,
            transitionBehavior: easeIn
        }
    }
}

export default PageTopper;