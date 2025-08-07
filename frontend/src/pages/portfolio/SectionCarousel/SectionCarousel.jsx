import "./SectionCarousel.css"
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import FrontCardInfo from "./FrontCardInfo";
import {useEffect, useRef, useState} from "react";
import {motion, useMotionValueEvent, useScroll} from "motion/react";

const ROTATE_TIME = 0.4;

const SectionCarousel = ({sectionInfo, openModal}) => {
    const[infoIdx, setInfoIdx] = useState(0);
    const[isAnimating, setIsAnimating] = useState(false);

    const[frontZ, setFrontZ] = useState(8);
    const[midLZ, setMidLeftZ] = useState(6);
    const[midRZ, setMidRightZ] = useState(6);
    const[backLZ, setBackLeftZ] = useState(4);
    const[backRZ, setBackRightZ] = useState(4);

    const[isRotating, setIsRotating] = useState(false);
    const[rotateState, setRotationState] = useState("base");

    //Card Spread Based on height of screen
    const[cardSpread, setCardSpread] = useState(1);
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setCardSpread(Math.min(1.75 - 1.75 * Math.abs((1 - 2 * latest)), 1))
    })
    //EoS

    //Shuffle Animations
    useEffect(() => {
        if(!isRotating) {
            resetZIdxs();
            setRotationState("base");
        }
    },[isRotating]);

    const resetZIdxs = () => {
        setFrontZ(8);
        setMidLeftZ(6);
        setMidRightZ(6);
        setBackLeftZ(4);
        setBackRightZ(4);
    };

    const rotateLeft = () => {
        if(!isRotating && !isAnimating) {
            setIsAnimating(true);
            setIsRotating(true);
            setRotationState("shuffleLeft");

            setTimeout(() => {
                setFrontZ(5);
                setMidLeftZ(3);
                setMidRightZ(7);
                setBackLeftZ(1);
                setBackRightZ(4);

                updateIndex(-1);
            }, ROTATE_TIME * 1000 * 0.5);
        }
    };

    const rotateRight = () => {
        if(!isRotating && !isAnimating) {
            setIsAnimating(true);
            setIsRotating(true);
            setRotationState("shuffleRight");

            setMidRightZ(5);

            setTimeout(() => {
                setFrontZ(5);
                setMidLeftZ(7);
                setMidRightZ(3);
                setBackLeftZ(5);
                setBackRightZ(1);

                updateIndex(1);
            }, ROTATE_TIME * 1000 * 0.5);
        }
    };

    const updateIndex = (next) => {
        var newIdx = infoIdx + next;
        if (newIdx === -1) {
            newIdx = sectionInfo.length - 1;
        }
        setInfoIdx(newIdx % sectionInfo.length)
    }
    //Eos

    //Expanding Modal
    //1. Set More Clicked to true to trigger the first UseEffect.
    //   If it was set to true: update modal info, clear More Clicked, Set Prop Updated to True
    //2. Prop Updated triggers next Use Effect.
    //3. Not totally sure why but we need to set the modal info again, then open it.
    const cardRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0, top: 0, left: 0 });
    const [moreClicked, setMoreClicked] = useState(false);
    const [propertyUpdateComplete, setPropertyUpdateComplete] = useState(false);

    const onMoreClicked = () => {
        setMoreClicked(true);
    }

    const updateDimensions = () => {
        const element = cardRef.current;
        if (!element) return;

        const { width, height, top, left } = element.getBoundingClientRect();
        setDimensions({ width, height, top, left });
    };

    useEffect(() => {
       if(moreClicked) {
           updateDimensions();
           const {width, height, top, left} = dimensions;
            const finalTop = top + height * 0.5;
            const finalLeft = left + width * 0.5;
            document.documentElement.style.setProperty("--modal-start-width",  `${width}px`);
            document.documentElement.style.setProperty("--modal-start-height",  `${height}px`);
            document.documentElement.style.setProperty("--modal-start-top",  `${finalTop}px`);
            document.documentElement.style.setProperty("--modal-start-left",  `${finalLeft}px`);
            setMoreClicked(false);
            setPropertyUpdateComplete(true);
       }
    }, [moreClicked, dimensions]);

    useEffect(() => {
        if(propertyUpdateComplete) {
            updateDimensions();

            const {width, height, top, left} = dimensions;
            const finalTop = top + height * 0.5;
            const finalLeft = left + width * 0.5;
            document.documentElement.style.setProperty("--modal-start-width",  `${width}px`);
            document.documentElement.style.setProperty("--modal-start-height",  `${height}px`);
            document.documentElement.style.setProperty("--modal-start-top",  `${finalTop}px`);
            document.documentElement.style.setProperty("--modal-start-left",  `${finalLeft}px`);

            openModal(sectionInfo[infoIdx].moreInfoID);
            setPropertyUpdateComplete(false);
        }
    }, [propertyUpdateComplete, dimensions, openModal, sectionInfo, infoIdx]);
    //EoS

    return (
        <>
            <motion.div ref={ref} className="sectionCarouselBase">
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() =>rotateLeft()}>
                    <FaChevronLeft className="carouselArrowButton" />
                </motion.div>
                <motion.div className="container" variants={containerVariants}
                            animate={ isAnimating ? rotateState : "none" }
                            onAnimationComplete={ () => {
                                if(rotateState === "shuffleLeft" || rotateState === "shuffleRight") {
                                    setIsRotating(false);

                                    setTimeout(() => {
                                        setIsAnimating(false);
                                    },33);
                                }
                            } }>
                    <motion.div className="card edgeCard leftEdge" style={{
                        zIndex: backLZ,
                        transform: `translate(-50%, -50%) translateX(calc(-50% * ${cardSpread}))`
                    }} variants={backLeftVariant} />
                    <motion.div className="card middleCard leftMiddle" style={{
                        zIndex: midLZ,
                        transform: `translate(-50%, -50%) translateX(calc(-25% * ${cardSpread}))`
                    }} variants={midLeftVariant} />
                    <motion.div ref={cardRef} className="card frontCard" style={{zIndex: frontZ}} variants={frontVariant}>
                    </motion.div>
                    <motion.div className="card middleCard rightMiddle" style={{
                        zIndex: midRZ,
                        transform: `translate(-50%, -50%) translateX(calc(25% * ${cardSpread}))`
                    }} variants={midRightVariant} />
                    <motion.div className="card edgeCard rightEdge" style={{
                        zIndex: backRZ,
                        transform: `translate(-50%, -50%) translateX(calc(50% * ${cardSpread}))`
                    }} variants={backRightVariant} />

                    <motion.div className="card buffer" variants={bufferCardVariant} />
                    <FrontCardInfo class="card info" cardInfo={sectionInfo[infoIdx]} animState={rotateState} infoVariants={frontInfoVariants} openModal={onMoreClicked} />


                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() =>rotateRight()}>
                    <FaChevronRight className="carouselArrowButton" />
                </motion.div>
            </motion.div>
        </>
    )
}

const containerVariants = {
    base: {},
    shuffleLeft: {},
    shuffleRight: {}
}

const frontVariant = {
    base: {
        transform: "translate(-50%, -50%)",
        width: 650,
        backgroundColor: "var(--color-light-2)",
        transition: {
            type: false
        }
    },
    shuffleLeft: {
        transform: ["translate(-50%, -50%)", "translate(-50%, -50%) translateX(-55%)", "translate(-50%, -50%) translateX(-25%)"],
        width: 600,
        backgroundColor: "var(--color-medium-1)",
        transition: {
            duration: ROTATE_TIME,
            ease: "easeOut",
            times: [0,0.75,1]
        }
    },
    shuffleRight: {
        transform: ["translate(-50%, -50%)", "translate(-50%, -50%) translateX(55%)", "translate(-50%, -50%) translateX(25%)"],
        width: 600,
        backgroundColor: "var(--color-medium-1)",
        transition: {
            duration: ROTATE_TIME,
            ease: "easeOut",
            times: [0,0.75,1]
        }
    }
}

const midLeftVariant = {
    base: {
        transform: "translate(-50%, -50%) translateX(-25%)",
        width: 600,
        backgroundColor: "var(--color-medium-1)",
        transition: {
            type: false
        }
    },
    shuffleLeft: {
        transform: "translate(-50%, -50%) translateX(-50%)",
        width: 550,
        backgroundColor: "var(--color-dark-2)",
        transition: {
            duration: ROTATE_TIME,
            ease: "easeOut",
        }
    },
    shuffleRight: {
        transform: ["translate(-50%, -50%) translateX(-25%)", "translate(-50%, -50%) translateX(-50%)", "translate(-50%, -50%)"],
        width: 650,
        backgroundColor: "var(--color-light-2)",
        transition: {
            duration: ROTATE_TIME,
            ease: "easeOut",
            times: [0,0.75,1]
        }
    }
}

const midRightVariant = {
    base: {
        transform: "translate(-50%, -50%) translateX(25%)",
        width: 600,
        backgroundColor: "var(--color-medium-1)",
        transition: {
            type: false
        }
    },
    shuffleLeft: {
        transform: ["translate(-50%, -50%) translateX(25%)", "translate(-50%, -50%) translateX(50%)", "translate(-50%, -50%)"],
        width: 650,
        backgroundColor: "var(--color-light-2)",
        transition: {
            duration: ROTATE_TIME,
            ease: "easeOut",
            times: [0,0.75,1]
        }
    },
    shuffleRight: {
        transform: "translate(-50%, -50%) translateX(50%)",
        width: 550,
        backgroundColor: "var(--color-dark-2)",
        transition: {
            duration: ROTATE_TIME,
            ease: "easeOut",
        }
    }
}

const backLeftVariant = {
    base: {
        transform: "translate(-50%, -50%) translateX(-50%)",
        width: 550,
        backgroundColor: "var(--color-dark-2)",
        transition: {
            type: false
        }
    },
    shuffleLeft: {
        transform: "translate(-50%, -50%) translateX(-25%)",
        backgroundColor: "var(--color-dark-2)",
        transition: {
            duration: ROTATE_TIME,
            ease: "easeOut",
        }
    },
    shuffleRight: {
        transform: "translate(-50%, -50%) translateX(-25%)",
        width: 600,
        backgroundColor: "var(--color-medium-1)",
        transition: {
            duration: ROTATE_TIME,
            ease: "easeOut",
        }
    }
}

const backRightVariant = {
    base: {
        transform: "translate(-50%, -50%) translateX(50%)",
        width: 550,
        backgroundColor: "var(--color-dark-2)",
        transition: {
            type: false
        }
    },
    shuffleLeft: {
        transform: "translate(-50%, -50%) translateX(25%)",
        backgroundColor: "var(--color-medium-1)",
        width: 600,
        transition: {
            duration: ROTATE_TIME,
            ease: "easeOut",
        }
    },
    shuffleRight: {
        transform: "translate(-50%, -50%) translateX(25%)",
        backgroundColor: "var(--color-dark-2)",
        transition: {
            duration: ROTATE_TIME,
            ease: "easeOut",
        }
    }
}

const bufferCardVariant = {
    base: {
        transform: "translate(-50%, -50%)",
        width: 500,
        backgroundColor: "var(--color-dark-2)",
        transition: {
            type: false
        }
    },
    shuffleLeft: {
        transform: "translate(-50%, -50%) translateX(50%)",
        width: 550,
        backgroundColor: "var(--color-dark-2)",
        transition: {
            duration: ROTATE_TIME,
            ease: "easeOut",
        }
    },
    shuffleRight: {
        transform: "translate(-50%, -50%) translateX(-50%)",
        width: 550,
        backgroundColor: "var(--color-dark-2)",
        transition: {
            duration: ROTATE_TIME,
            ease: "easeOut",
        }
    }
}

const frontInfoVariants = {
    base: {
        transform: "translate(-50%, -50%)",
        opacity: 1,
        transition: {
            type: false
        }
    },
    shuffleLeft: {
        transform: ["translate(-50%, -50%)", "translate(-50%, -50%) translateX(-55%)", "translate(-50%, -50%) translateX(25%)", "translate(-50%, -50%)"],
        opacity: [1,0,0,1],
        transition: {
            transform: {
                duration: ROTATE_TIME,
                ease: "easeOut",
                times: [0, 0.75, 0.9, 1]
            },
            opacity: {
                duration: ROTATE_TIME,
                times: [0,0.1,0.9,1]
            }
        }
    },
    shuffleRight: {
        transform: ["translate(-50%, -50%)", "translate(-50%, -50%) translateX(55%)", "translate(-50%, -50%) translateX(-25%)", "translate(-50%, -50%)"],
        opacity: [1,0,0,1],
        transition: {
            transform: {
                duration: ROTATE_TIME,
                ease: "easeOut",
                times: [0, 0.75, 0.9, 1]
            },
            opacity: {
                duration: ROTATE_TIME,
                times: [0,0.1,0.9,1]
            }
        }
    }
}

export default SectionCarousel

/*  How do I want this to work?

    - Store information about each hypothetical item in the carousel in a different file.
    - Basic info stored in struct
    - Create the carousels in Portfolio.jsx pass in this array of structs
    - Modal is its own thing that gets triggered by the more button.

 */