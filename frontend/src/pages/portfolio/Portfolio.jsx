import "./Portfolio.css"

import PageTopper from "../../components/PageTopper/PageTopper.jsx";
import SectionHeader from "./SectionHeader/SectionHeader.jsx";
import SectionCarousel from "./SectionCarousel/SectionCarousel.jsx";
import PortfolioModal from "./PortfolioModal/PortfolioModal.jsx";
import {PortfolioMap} from "./PortfolioInfoMap.js"
import {PORTFOLIO_MORE_INFO_MAP} from "./PortfolioMoreInfo.js";
import {EXPERIENCE_SECTION, GAMES_SECTION, ENGINE_RENDERING_SECTION, MODELING_SECTION, WEB_DEV_SECTION} from "./PortfolioCardInfo.js";
import {AnimatePresence, easeIn, easeOut} from "framer-motion";

import {motion} from "motion/react";
import {useState} from "react";

const Portfolio = () => {
    const [modalOpen, setModalOpen] = useState("closed");
    const [modalInfoID, setModalInfoID] = useState("ID");

    const openModal = (infoID) => {
        setModalInfoID(infoID);
        setModalOpen("open");
    }
    const closeModal = () => setModalOpen("closed");

    return  (
        <div style={{display: "flex", flexDirection: "column", textAlign: "center", marginTop: "70px"}}>

            <PageTopper srcImage={"../../../imgs/Addison-Stairs.jpg"} title={"PORTFOLIO"} imgPos={38} />

            <motion.div className="portfolioBackdrop" variants={backdropVariant} animate={modalOpen} onClick={() => closeModal()}/>
            <AnimatePresence initial={false} exitBeforeEnter={true}>
                {
                    modalOpen !== "closed" && <PortfolioModal modalOpen={modalOpen} backClicked={closeModal} infoStruct={PORTFOLIO_MORE_INFO_MAP[modalInfoID]}/>
                }
            </AnimatePresence>

            {PortfolioMap.map(section => (
                <div key={section.SectionTitle}>
                    <SectionHeader title={section.SectionTitle} />
                    <SectionCarousel sectionInfo={section.Info} openModal={openModal}/>
                </div>
            ))}
        </div>

    )
}

const backdropVariant = {
    closed: {
        height: "0vh",
        transition: {
            duration: 0.5,
            transitionBehavior: easeIn
        }
    },
    open: {
        height: "100vh",
        transition: {
            duration: 0.5,
            transitionBehavior: easeOut
        }
    }
}

export default Portfolio