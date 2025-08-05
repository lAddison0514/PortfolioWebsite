import "./ModalVideoPlayer.css"
import {useRef, useState} from "react";
import { FaPlay, FaPause } from 'react-icons/fa';

const ModalVideoPlayer = ({videoSource}) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMouseHovering, setIsMouseHovering] = useState(false);

    const videoRef = useRef(null);

    function handleClick() {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);

        if (nextIsPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }

    return (
        <div className="videoContainer" >
            <video
                className="videoBox"
                onMouseEnter={() =>setIsMouseHovering(true)}
                onMouseLeave={()=>setIsMouseHovering(false)}
                onClick={handleClick}
                ref={videoRef}
                loop={true}
                autoPlay={true}
                muted={true}>
                <source src={videoSource} type="video/mp4"/>
            </video>
            <div className="videoIconDiv">
                    { isMouseHovering && (isPlaying ? <FaPause className="videoPlayIcon"/> : <FaPlay className="videoPlayIcon"/>) }
            </div>
        </div>
    )
}

export default ModalVideoPlayer