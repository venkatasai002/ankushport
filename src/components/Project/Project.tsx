import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
            </header>
            <div className="body">
              <h3>The Basin</h3>
              <p> Developed ‘The Basin,’ a digital platform for Indian farmers to access market prices, government schemes, soil testing locations, and weather updates. Enhanced accessibility with regional language support and text-to-speech features. Collaborated with cross-functional teams to create an inclusive, user-friendly interface, bridging the information gap in agriculture. </p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>Typescript</li> <li>HTML</li> <li>CSS</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
            </header>
            <div className="body">
              <h3>E-Coli Classification</h3>
              <p>
              Explored the classification of E. coli bacteria using a machine learning technique known as Multilayer Perceptron (MLP) classifier. This method falls under supervised learning, where the algorithm is trained on labeled data to make predictions or classify new, unseen data points.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Pandas</li>
                <li>LangChain</li>
                <li>bioinformatics</li>
                <li>Scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>The New World</h3>
              <p>
              Predicted population growth along with natural resource availability for the next 50 years (2050) using Tableau (World Index dataset).              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>XGBoost</li>
                <li>Matplotlib</li>
                <li>Tableau</li>
                <li>SQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}