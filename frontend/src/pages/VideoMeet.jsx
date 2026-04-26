import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import server from '../environment'

const VideoMeetComponent = () => {
    const { url } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h2>Meeting: {url}</h2>
            <button onClick={() => navigate('/home')}>Leave Meeting</button>
        </div>
    )
}

export default VideoMeetComponent;