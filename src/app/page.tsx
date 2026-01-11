import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Project from "../components/Project"; // Import the Project component
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="container" style={{ position: "relative" }}>
      <header className="header">
        <div className="profile">
          <div className="profile-image">
            <Image
              src="/andrew.jpeg"
              alt="Profile Picture"
              width={175}
              height={175}
              style={{ borderRadius: "8px" }}
            />
          </div>
          <div className="profile-info" style={{ marginLeft: "4rem", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h1 style={{ margin: 0 }}>Andrew Shi</h1>
              <ThemeToggle />
            </div>
            <p>CS @ Stanford</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/acshi/" target="_blank" rel="noopener noreferrer" style={{ marginRight: "1rem" }}>
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.5rem" }}/>
              </a>
              <a href="https://github.com/andrewcshi" target="_blank" rel="noopener noreferrer" style={{ marginRight: "1rem" }}>
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.5rem" }}/>
              </a>
              <a href="mailto:acshi@stanford.edu" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "1.5rem" }}/>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section style={{ marginBottom: "2rem" }}>
          <h2>About Me</h2>
          <p>
            I'm a senior at Stanford pursuing a concurrent BS/MS in Computer Science, concentrating in AI and Systems. I'm also a classically-trained pianist and have performed on international stages.
          </p>
        </section>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Industry</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                    Amazon Web Services (AWS)
                  </a>
                </h3>
                <p>Software Development Engineer Intern</p>
                <p>Jun 2025 – Sep 2025</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://voleon.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                    The Voleon Group
                  </a>
                </h3>
                <p>Trading Intern</p>
                <p>Jun 2024 – Aug 2024</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://www.dadavidson.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                    D.A. Davidson & Co.
                  </a>
                </h3>
                <p>Summer Analyst</p>
                <p>Jun 2023 – Aug 2023</p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Research</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://svl.stanford.edu/" target="_blank" rel="noopener noreferrer" className="company-link">
                    Stanford Vision and Learning Lab
                  </a>
                </h3>
                <p>Researcher @ CogAI Group</p>
                <p>Nov 2025 – Present</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://hazyresearch.stanford.edu/" target="_blank" rel="noopener noreferrer" className="company-link">
                    Stanford AI Lab
                  </a>
                </h3>
                <p>Researcher @ Hazy Research</p>
                <p>Researcher @ Scaling Intelligence Lab</p>
                <p>Oct 2024 – Present</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://hai.stanford.edu/" target="_blank" rel="noopener noreferrer" className="company-link">
                    Stanford Human-Centered AI Institute
                  </a>
                </h3>
                <p>Research Assistant</p>
                <p>Oct 2023 – Mar 2025</p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Teaching</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://cs229.stanford.edu/" target="_blank" rel="noopener noreferrer" className="company-link">
                  CS 229: Machine Learning
                  </a>
                </h3>
                <p>Head Teaching Assistant</p>
                <p>Jan 2025 – Present</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://cs229.stanford.edu/index.html-fall25" target="_blank" rel="noopener noreferrer" className="company-link">
                  CS 229: Machine Learning
                  </a>
                </h3>
                <p>Teaching Assistant</p>
                <p>Sep 2025 – Dec 2025</p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Projects</h2>
          <Project
            title="Fine-tuning CodeLlama-7B for Fortran Code Generation using PEFT"
            description="Received Outstanding Custom Project Award from Prof. Tatsunori Hashimoto and Prof. Diyi Yang in Stanford's CS 224N (Natural Language Processing)."
            link="https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1244/final-projects/AndrewCShiSohamGovandeTaeukKang.pdf"
          />
          <Project
            title="AI Index Report"
            description={
              <>
                Contributed to <a href="https://hai.stanford.edu/ai-index/2024-ai-index-report" target="_blank" rel="noopener noreferrer" className="company-link" style={{ fontWeight: "normal" }}>2024</a> and <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report" target="_blank" rel="noopener noreferrer" className="company-link" style={{ fontWeight: "normal" }}>2025</a> AI Index Reports. The Stanford HAI AI Index report tracks, collates, distills, and visualizes data related to artificial intelligence (AI).
              </>
            }
            link="https://hai.stanford.edu/ai-index"
          />
        </section>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Piano Performance</h2>
          <p>I am a four-time National YoungArts winner, three-time California State First-Prize winner, and was admitted to the Juilliard School in 2022.</p>
          <a
            href="/piano"
            className="arrow-link"
            style={{ fontWeight: "bold" }}
          >
            Accolades and Performances
            <FontAwesomeIcon icon={faArrowRightLong} style={{ marginLeft: "0.5rem" }} />
          </a>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            <a href="mailto:acshi@stanford.edu" target="_blank" rel="noopener noreferrer" className="contact-link">
              acshi [at] stanford [dot] edu
            </a>
          </p>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Andrew Shi. All rights reserved.</p>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/acshi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.5rem" }}/>
            </a>
            <a href="https://github.com/andrewcshi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.5rem" }}/>
            </a>
            <a href="mailto:acshi@stanford.edu" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "1.5rem" }}/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}