import React, {useEffect, useState} from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import { verticallyNodes, edges, horizontallyNodes } from "@/constants/nodesEdgesConfig";
import 'reactflow/dist/style.css';
import './kzengineDiagram.css';


function KzengineDiagram() {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const containerHeight = windowSize.width < 800 ? '80vh' : '800';
    const actualNodes = windowSize.width < 800 ? verticallyNodes : horizontallyNodes;

    return (<>
                <div className="hor-ver-centered bg-dark">
                    <h3 className="m-3 text-light">Signal Generator Pipeline</h3>
                </div>
                <div className="hor-ver-centered bg-dark">
                    <div className="flow-container" style={{  height: containerHeight }}>
                        <ReactFlow
                            nodes={actualNodes}
                            edges={edges}
                        >
                            <Background />
                            <Controls />
                        </ReactFlow>
                    </div>
                </div>
            </>
    );
}

export default KzengineDiagram;