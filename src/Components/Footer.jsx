import React from 'react';
// Initialization for ES Users
import { Ripple, initMDB } from 'mdb-ui-kit';

initMDB({ Ripple });

function Footer() {
  return (
    <footer className="text-center  ">
      {/* Grid container */}
      <div className="container pt-4">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-facebook-f text-light"></i>
          </a>

          {/* Twitter */}
          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter text-light"></i>
          </a>

          {/* Google */}
          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-google text-light"></i>
          </a>

          {/* Instagram */}
          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-instagram text-light"></i>
          </a>

          {/* Linkedin */}
          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin text-light"></i>
          </a>

          {/* Github */}
          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github text-light"></i>
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div
        className="text-center p-3 text-secondary"
         
      >
        © 2020 Copyright:
        MinnalMurali.c
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
