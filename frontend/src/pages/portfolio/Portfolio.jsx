import "./Portfolio.css"

import PageTopper from "../../components/PageTopper/PageTopper";
import SectionHeader from "./SectionHeader/SectionHeader";
import SectionCarousel from "./SectionCarousel/SectionCarousel";
import PortfolioModal from "./PortfolioModal/PortfolioModal";
import {PortfolioMap} from "./PortfolioInfoMap.js"
import {PORTFOLIO_MORE_INFO_MAP} from "./PortfolioMoreInfo.js";
import {EXPERIENCE_SECTION, GAMES_SECTION, ENGINE_RENDERING_SECTION, MODELING_SECTION, WEB_DEV_SECTION} from "./PortfolioCardInfo.js";
import {AnimatePresence, easeIn, easeOut} from "framer-motion";

import {motion} from "motion/react";
import {useEffect, useRef, useState} from "react";
import SectionExpanded from "./SectionExpanded/SectionExpanded.jsx";
import ExpandButton from "./SectionCarousel/ExpandButton.jsx";

const Portfolio = () => {
    const [modalOpen, setModalOpen] = useState("closed");
    const [modalInfoID, setModalInfoID] = useState("ID");

    // Manage forced swap between section types
    const [forceExpand, setForceExpand] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
          setForceExpand(window.matchMedia('(max-width: 1350px)').matches);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    // EoS

    // Manage manual swap between section types
    const [sectionsExpanded, setSectionsExpanded] = useState([]);
    const hasRun = useRef(false);

    useEffect(() => {
        if(!hasRun.current) {
            var temp = []
            PortfolioMap.map(() => (
                temp.push(false)
            ))
            setSectionsExpanded(temp);
            hasRun.current = true;
        }
    }, [hasRun, sectionsExpanded]);

    const setExpandedBool = (idx, newVal) => {
        setSectionsExpanded(sectionsExpanded.map((item, i) => (i === idx ? newVal : item)));
    }
    // EoS

    const openModal = (infoID) => {
        document.body.style.overflow = "hidden";

        setModalInfoID(infoID);
        setModalOpen("open");
    }
    const closeModal = () => {
        document.body.style.overflow = "";

        setModalOpen("closed");
    }

    return  (
        <div style={{display: "flex", flexDirection: "column", textAlign: "center", marginTop: "70px"}}>

            <PageTopper srcImage={"../../../imgs/Addison-Stairs.jpg"} title={"PORTFOLIO"} imgPos={38} />

            <motion.div className="portfolioBackdrop" variants={backdropVariant} animate={modalOpen} onClick={() => closeModal()}/>
            <AnimatePresence initial={false} exitBeforeEnter={true}>
                {
                    modalOpen !== "closed" && <PortfolioModal modalOpen={modalOpen} backClicked={closeModal} infoStruct={PORTFOLIO_MORE_INFO_MAP[modalInfoID]}/>
                }
            </AnimatePresence>

            {forceExpand ?
                (
                    PortfolioMap.map(section => (
                        <div key={section.SectionTitle}>
                            <SectionHeader title={section.SectionTitle} />
                            <SectionExpanded sectionInfo={section.Info} openModal={openModal} />
                        </div>
                    ))
                )
                :
                (
                    PortfolioMap.map((section, i) => (
                        <div key={section.SectionTitle}>
                            <SectionHeader title={section.SectionTitle} />
                            { sectionsExpanded[i] ?
                                <SectionExpanded sectionInfo={section.Info} openModal={openModal} />
                                :
                                <SectionCarousel sectionInfo={section.Info} openModal={openModal}/>
                            }
                            <ExpandButton ctrlIdx={i} shouldExpand={setExpandedBool} currentState={sectionsExpanded[i]}/>
                        </div>
                    ))
                )
            }
        </div>

    )
}

const backdropVariant = {
    closed: {
        height: "0vh",
        transition: {
            duration: 0.35,
            transitionBehavior: easeIn
        }
    },
    open: {
        height: "100vh",
        transition: {
            duration: 0.30,
            transitionBehavior: easeIn
        }
    }
}

export default Portfolio