import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer
    className="page-footer text-warning font-small pt-4"
    style={{ borderTop: '1px solid white' }}
  >
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">KZENGINE AI</h5>
          <p>
            Always Imagine. Go forward and make it! If you want any help. Our
            team wil be your side.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Contacts</h5>
          <ul className="list-unstyled">
            <li>
              <a className="text-warning" href="mailto:kozanakyel@gmail.com">
                kozanakyel@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a
                className="text-warning"
                href="https://www.linkedin.com/company/kzai/"
                target="_blank"
                style={{ fontWeight: 'bold' }}
              >
                KZAI - Linkedn
              </a>
            </li>
            <li>
              <a
                className="text-warning"
                href="https://github.com/kozanakyel/KZ-Engine-Backend"
                target="_blank"
                style={{ fontWeight: 'bold' }}
              >
                KZEngine - Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2023 Copyright:
      <a className="text-warning" href="#!" style={{ fontWeight: 'bold' }}>
        KZAI CORP.
      </a>
    </div>
  </footer>
);

export default Footer;
