import { useState } from "react";
import { PingPongProject } from "./projects/PingPongProject"

export const ShowCaseProjectCarousel = () => {
    const [showPingPong, setShowPingPong] = useState(false);
    const handleShowPingPong = () => {
        setShowPingPong(true);
    }
  return (
    <>
    <div>ShowCaseProjectCarousel</div>
    <button onClick={handleShowPingPong}>Show Ping Pong Project</button>
    {showPingPong && <PingPongProject />}
    </>
    
  )
}
