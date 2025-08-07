import "./SectionExpanded.css"
import ExpandedCardInfo from "./ExpandedCardInfo.jsx";
import ExpandedCard from "./ExpandedCard.jsx";

const SectionExpanded = ({sectionInfo, openModal}) => {
    return (
        <div className="expandedSectionBase">
        {sectionInfo.map(section => (
                <ExpandedCard key={section.title} info={section} openModal={openModal}/>
            ))
        }
        </div>
    )
}

export default SectionExpanded