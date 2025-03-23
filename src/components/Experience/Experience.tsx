import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="project">
      <h2>Experience</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-title">
                <h3>Analyst at Global Logic</h3>
                <p>May 2024 - March 2025 | Hyd, India</p>
              </div>
            </header>
            <div className="body">
              <p>
                Specializing in data quality management for major clients such as Google and Amazon. Expertise in analyzing and refining datasets to support machine learning and AI operations, ensuring accuracy, consistency, and enhanced performance in AI-driven applications.
              </p>
              <p>
                Skilled in leveraging data validation techniques and optimizing data pipelines to improve data integrity and operational efficiency. Increased dataset quality by 140%.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-title">
                <h3>Business Development Intern at R.A. Services</h3>
                <p>July 2023 - Sep 2023 | Remote</p>
              </div>
            </header>
            <div className="body">
              <p>
                Focused on client acquisition and identifying potential clients. Contributed to the growth of the client portfolio while mastering business development techniques.
              </p>
              <p>
                Played a key role in generating 20+ clients and successfully acquiring 15+ clients.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-title">
                <h3>AI-ML Intern at AICTE & AWS Academy</h3>
                <p>Mar 2022 - May 2022 | Hyd, India</p>
              </div>
            </header>
            <div className="body">
              <p>
                Successfully completed a 10-week AI-ML Virtual Internship supported by AWS Academy, organized by AICTE & EduSkills.
              </p>
              <p>
                Gained hands-on experience in artificial intelligence, machine learning concepts, model development, and deployment.
              </p>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
