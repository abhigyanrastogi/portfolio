import React, { Suspense } from "react";

const RemotePingPong = React.lazy(() => import('pingPongRemote/PingPongApp'));
export const PingPongProject = () => {
  return (
    <>
    <h1>Ping Pong Project</h1>
    <Suspense fallback={<div>Loading Ping Pong App...</div>}>
        <RemotePingPong />
    </Suspense>
    </>
  )
}
