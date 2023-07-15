import React, { useState } from 'react';
import axios from '../../utils/axios';

const AIProjectAssistant = () => {
  const [f1Query, setF1Query] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const requestBody = { query: f1Query };
      const res = await axios.post('/ai_assistant', requestBody);

      setResponse(res.data.response);
      setLoading(false);
    } catch (error) {
      console.error('Error occurred while fetching data:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container hor-ver-centered">
      <div className={'hor-ver-centered m-3 row'}>
        <h3 className={'hor-ver-centered m-3 row'}>KZ AI Assistant</h3>
        <form onSubmit={handleSubmit}>
          <div className="row align-items-center">
            <div className="col-2"></div>
            <div className="col-md-8">
              <input
                id="f1Query"
                type="text"
                className="form-control"
                value={f1Query}
                onChange={(e) => setF1Query(e.target.value)}
              />
            </div>
            <div className="col-2">
              <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
          </div>
        </form>

        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          response && (
            <div className="row m-3">
              <div className="col p-3 border border-info">
                <p className="text-info">{response}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AIProjectAssistant;
