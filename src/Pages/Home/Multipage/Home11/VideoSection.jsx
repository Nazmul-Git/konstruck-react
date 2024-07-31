import React, { useState } from 'react';
import VideoPopUp from '../../../../Components/Modal/VideoPopUp';
import { Link } from 'react-router-dom';

const VideoSection = () => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div id="rs-videos" className="rs-videos video-style1">
            <div className="video-item">
                <div className="video-overlay"></div>
                <div className="animate-border">
                    <Link onClick={openVideoPopup} className="popup-border popup-videos">
                        <i className="ri-play-fill"></i>
                    </Link>
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/embed/5CLmRIHR5Zw" />
        </div>
    );
};

export default VideoSection;