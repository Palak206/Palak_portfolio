import { useEffect, useRef, useState } from "react";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Programming from "./components/programming/Programming";
import Projects from "./Projects";
import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/work/Work";
// import components from './components';
import './App.css'
import Typed from "typed.js";
export default function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkshitory] = useState(false);
  const [programmings, setprogrammings] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Enthusiastic Dev 😎 ",
        "Full Stack Developer 💻 ",
        "Wordpress Developer 🚧",
        "Game Developer 🎮",

      ],
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      autoInsertCss: true
      // cursorChar: "|"
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const el = useRef(null);
  function SetAllFalse() {
    seteducation(false);
    setworkshitory(false);
    setprogrammings(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new ">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex aling-items-center justify-content-center">
            Palak Goyal{" "}
          </span>
          <div
            className={
              !opennav
                ? "bars mx-2 transition-all "
                : " transition-all open bars mx-2 "
            }
            style={{ background: opennav && "#02203c" }}
            onClick={() => setopennav(!opennav)}
          >
            {" "}
          </div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? " d-flex bg-new px-9 navbar-new py-5 flex-rows transition-all "
            : " d-flex bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all "
        }
      >
        <span className="brand-name">Palak Goyal</span>
        <div className="d-flex flex-rows">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Home{" "}
          </a>
          <a
            href="#aboutme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            About me
          </a>
          <a
            href="#resume"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Resume
          </a>
          <a
            href="#testimonials"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Testimonial
          </a>
          <a
            href="#contactme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Contact me
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-2" id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Palak Goyal</span>
              </span>
              <span
                className="Im-text-enthusiastic py-2"
                ref={el}
                style={{ minHeight: "79px" }}
              >
                {/* Enthusiastic Dev 😎 */}
              </span>
              <div className='colz'>
                <div className='colz-icon'>
                  <a href='www.linkedin.com/in/palak-goyal-a8a9a421b/'>
                    <i className='fa fa-linkedin-square'></i>
                  </a>
                  <a href='https://instagram.com/palakgoyal206?igshid=YmMyMTA2M2Y='>
                    <i className='fa fa-instagram'></i>
                  </a>
                  {/* <a href='https://twitter.com/R2Gaming06'>
                    <i className='fa fa-twitter'></i>
                  </a> */}
                  <a href='https://github.com/Palak206'>
                    <i className='fa fa-github'></i>
                  </a>
                </div>
              </div>
              <span className="Im-text-subheading">
                Knack of building applications with front and back end
                operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me">
                  Hire me
                </a>
                <a
                  href="https://docs.google.com/document/d/1jBFCqzLb_QvufCirrQCDMG6X0A5JprcqL1LDYTr1JPk/edit?usp=sharing"
                  className="btn-resume-me"
                  target="_blank"
                >
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://media.licdn.com/dms/image/D4D03AQEMc0XDSiiyBA/profile-displayphoto-shrink_800_800/0/1671559800742?e=1677715200&v=beta&t=A-hOjwyEQR8mkzl9moOu4CQb5prYqc3ejeQDcuFa-vU"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text" id="aboutme">
            {" "}
            About me
          </span>
          <span className="why-text-sub">Why Choose me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                className="lottie-1"
                src="https://assets7.lottiefiles.com/packages/lf20_v1yudlrx.json"
                background="transparent"
                speed="1"
                // style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                Full Stack web developer with background knowledge in
                MERN Stack with redux, along with a knack of building
                applications with utmost efficiency. Currently puesuing B.Tech in Computer
                Science Business System.
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few highlights</span>
                <span className="few-list">
                  <ul>
                    <li> Full stack web development</li>
                    <li> Interactive Front end as per the design</li>
                    <li> Android studio,React Native and flutter</li>
                    <li> Node JS,Express,MongoDB</li>

                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My formal Bio Details</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex  px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span class="icons-span">
                <i class="fas fa-user-graduate"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-briefcase"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-code"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-tasks"></i>{" "}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                Education{" "}
              </span>
              <span
                className={
                  workhistory === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setworkshitory, true);
                }}
              >
                Work{" "}
              </span>
              <span
                className={
                  programmings === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprogrammings, true);
                }}
              >
                Programming{" "}
              </span>
              <span
                className={
                  projects === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
              >
                Projects{" "}
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>

      <div className="testmonails-part my-5" id="testimonials">
        <div className="testimonials-inner-part d-flex flex-column">
          <span className="about-me-text">Testimonials</span>
          <span className="why-text-sub mb-5">
            What my clients say about me{" "}
          </span>
          <Testimonials />
        </div>
      </div>

      <div className="contact-me-part " id="contactme">
        <div className="relative-bg"> </div>

        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact Me</span>
          <span className="why-text-sub mb-5">Lets Keep in Touch</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}