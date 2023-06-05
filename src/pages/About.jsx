import React from "react";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="About">
        <p>
          I am an accomplished Digital Marketer, Web Designer, Writer, and
          Software Developer with a proven track record of leading teams through
          project management, digital marketing and supervisory roles. My skill
          set spans across diverse domains including banking, compliance, data
          analysis, marketing, hospitality, coding and programming languages,
          customer service, and team leadership. I possess an Associates degree
          in Business Administration and am currently pursuing a Bachelor of
          Science in Computer Science and Mathematics at Louisiana State
          University. Additionally, I have completed a Google-sponsored software
          engineering program at PerScholas Technical School, which entailed
          advanced training in JavaScript, computer science principles, and
          front and back end development.
        </p>

        <div className="Links1">
          <ul className="Links">
            <ol>
              <a
                className="Link3"
                href="https://www.linkedin.com/in/deja-craft/"
                rel="linkedin"
              >
                Linked In
              </a>
            </ol>
            <ol>
              <a
                className="Link3"
                href="https://www.clippings.me/dejac"
                rel="writing"
              >
                My Writing
              </a>
            </ol>
            <ol>
              <a
                className="Link3"
                href="https://github.com/Dejac01"
                rel="writing"
              >
                My GitHub
              </a>
            </ol>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
