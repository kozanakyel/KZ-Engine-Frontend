import React from 'react';
import './kzengineDiagram.css';
import KZProjectDiagram from '../../../public/images/KZ_project.drawio.svg';

function KzengineDiagram() {
    return (
        <>
            <div className="hor-ver-centered bg-dark">
                <h4 className="m-3">Project Structure</h4>
            </div>
            <div className="hor-ver-centered bg-warning p-3">
                <img className="kzengineDiagram" src={KZProjectDiagram} alt="KZ Project Diagram"/>
            </div>
        </>

    );
}

export default KzengineDiagram;