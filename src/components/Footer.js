import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h2>Let's chat</h2>
        <ul>
          <h2>
            <a
              href="https://www.linkedin.com/in/ivy-chen-4065aab7/"
              target="_blank"
              rel="noreferrer"
            >
              <li>Linkedin</li>
            </a>
          </h2>
          <h2>
            <a href="https://twitter.com/Ivavay" target="_blank"rel="noreferrer">
              <li>Twitter</li>
            </a>
          </h2>
          <h2>
            <a href="https://dev.to/ivavay" target="_blank" rel="noreferrer">
              <li>Dev To</li>
            </a>
          </h2>
          <h2>
            <li>Blog</li>
          </h2>
          <h2 className="built-by">
            <li>Built by Ivy Chen © 2021</li>
          </h2>
        </ul>
      </div>
    </>
  );
};

export default Footer;
