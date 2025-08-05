import "./PortfolioModal.css"

import {motion} from "motion/react";
import {easeOut} from "framer-motion";
import ModalVideoPlayer from "./ModalVideoPlayer.jsx";

const PortfolioModal = ({modalOpen, backClicked, infoStruct}) => {
    return (
        <motion.div className="portfolioModal" variants={modalVariant} initial={"closed"} animate={modalOpen} exit={"closed"}>
            <motion.div variants={modalInfoVariants} style={{display: "flex", flexDirection: "column", alignItems: "center", overflow: "hidden", width: "100%", height: "100%"}}>
                <div className="portfolioScrollWindow">
                    <h1 className="modalTitle">{infoStruct.title}</h1>
                    {infoStruct.isImg ?
                        <img className={"modalImg"} src={`${infoStruct.contentPath}`} alt="" />
                        :
                        <ModalVideoPlayer videoSource={`${infoStruct.contentPath}`} />
                    }
                    <h1 className="modalDatesTech">{infoStruct.dates} | Tech: {infoStruct.techUsed}</h1>
                    <p className={"modalText"}>
                        {infoStruct.content}
                    </p>
                </div>

                <motion.button className="backButton" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={backClicked}>BACK</motion.button>
            </motion.div>
        </motion.div>
    )

}

const modalVariant = {
    closed: {
        width: "var(--modal-start-width)",
        height: "var(--modal-start-height)",
        top: "var(--modal-start-top)",
        left: "var(--modal-start-left)",
        opacity: 0,
        transition: {
            default: {
                duration: 0.4,
                transitionBehavior: easeOut,
                type: "spring",
                bounce: 0.2,
            },
            opacity: {
                duration: 0.1,
                delay: 0.3,
                transitionBehavior: easeOut,
            }
        }
    },
    open: {
        width: "70%",
        height: "80%",
        top: "54%",
        left: "50%",
        opacity: 1,
        transition: {
            default: {
                duration: 0.4,
                delay: 0.1,
                transitionBehavior: easeOut,
                type: "spring",
                bounce: 0.4,
            },
            opacity: {
                duration: 0.1,
                transitionBehavior: easeOut,
            }
        }
    }
}

const modalInfoVariants = {
    closed: {
        opacity: 0,
        transition: {
            duration: 0.1,
            transitionBehavior: easeOut,
        }
    },
    open: {
        opacity: 1,
        transition: {
            duration: 0.075,
            delay: 0.3,
            transitionBehavior: easeOut
        }
    }
}

export default PortfolioModal;