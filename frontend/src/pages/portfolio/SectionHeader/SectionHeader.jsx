import "./SectionHeader.css"
import {useRef, useState} from "react";
import {motion, useMotionValueEvent, useScroll} from "motion/react"

const SectionHeader = ({title}) => {
    const [underlineWidth, setUnderlineWidth] = useState(0)
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"],
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {

        setUnderlineWidth(latest * 100)
    })

    return (
        <section>
            <div ref={ref} className="sectionHeaderBase">
                <h1 className="sectionTitle">{title}</h1>
                <motion.div className="underline" style={{width: `${underlineWidth}%`}}/>
            </div>
        </section>
    )
}

export default SectionHeader