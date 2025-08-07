import "./SectionExpanded.css"
import ExpandedCardInfo from "./ExpandedCardInfo.jsx";
import {useEffect, useRef, useState} from "react";

const ExpandedCard = ({key, info, openModal}) => {
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

            openModal(info.moreInfoID);
            setPropertyUpdateComplete(false);
        }
    }, [propertyUpdateComplete, dimensions, openModal, info]);

    return (
        <div key={key} className="cardContainer">
            <div ref={cardRef} className="expandedCard">
                <ExpandedCardInfo cardInfo={info} openModal={onMoreClicked}/>
            </div>
        </div>
    )
}

export default ExpandedCard;