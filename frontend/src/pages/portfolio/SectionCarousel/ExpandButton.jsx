import "./FrontCardInfo.css"
import {useState} from "react";
import {motion} from "motion/react";

const ExpandButton = ({ctrlIdx, shouldExpand, currentState}) => {
    const [expanded, setExpanded] = useState(currentState);

    const triggerExpand = () => {
        shouldExpand(ctrlIdx, !expanded);
        setExpanded(!expanded);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <motion.h1 className="expandButton"
                onClick={triggerExpand}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>{expanded ? "Collapse" : "Expand" }</motion.h1>
        </div>
    )
}

export default ExpandButton;