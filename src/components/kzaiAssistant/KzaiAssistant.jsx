import React from 'react';
import { useState, useEffect } from 'react';

const KzaiAssistant = () => {
  const infoApp1 = (
    <p className="mb-3 text-light">
      The KZ AI Assistant powered to LLM process and this assistant can select
      which part of the conversation in it.
      <mark>
        <strong>
          Composed using of Langchain, openai, vectorstore, indexed and
          embedding operation.
        </strong>
      </mark>{' '}
      All this AI assistant not related only chatbot actually you can get trading advice for
      hourly period for any coin. We used to Few-shot prompt templating for this
      process because better explanation doesn't require a fine-tuned modeling.
    </p>
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageUrl = windowWidth < 800 ? '/images/scal11.png' : "/images/kzaiassist.png";

  return (
    <>
      <div className="p-5 text-center">
        <h1 className="text-warning">KZ AI Assistant Diagram</h1>
        <div className="container mb-3">
          <div className="row">
            <div className="col-sm align-self-center">
              <div>{infoApp1}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm d-flex justify-content-center">
              <img
                width={"850px"}
                height={"auto"}
                src={imageUrl}
                alt="Diagram"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KzaiAssistant;
