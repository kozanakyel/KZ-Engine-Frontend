import React from 'react';

const KzaiAssistant = () => {
  const infoApp1 = (
    <p className="lead mb-3 text-dark">
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

  return (
    <>
      <div className="p-5 text-center bg-light">
        <h3 className="text-dark">KZ AI Assistant Diagram</h3>
        <div className="container mb-3">
          <div className="row">
            <div className="col-sm align-self-center">
              <div>{infoApp1}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm d-flex justify-content-center">
              <img
                height={"auto"}
                src="/images/kzaiassist.png"
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
