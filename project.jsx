import draft1 from '../src/assets/Predraft1.png';
import draft2 from '../src/assets/Predraft2.png';
import rider from '../src/assets/riders.png';
import domainclass from '../src/assets/DomainClass.png';

export default function Project() {
  const imageStyle = {
    width: "150px",
    height: "150px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto 15px auto"
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <h2>Essay Analysis</h2>

          <img
            src={draft1}
            alt="Essay Analysis"
            style={imageStyle}
          />

          <p>
            For my English class we analyzed an essay called
            "The Actual Hidden Truth About UFOs". We identified
            the author's thesis, summarized paragraphs, and
            wrote a complete essay analysis based on the text.
          </p>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h2>Domain Class Diagram</h2>

          <img
            src={domainclass}
            alt="Domain Class Diagram"
            style={imageStyle}
          />

          <p>
            For Software Requirements, my group designed an AI
            learning assistant and created a Domain Class Diagram
            to model system interactions and relationships.
          </p>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h2>Java Food Delivery App</h2>

          <img
            src={rider}
            alt="Java Delivery Application"
            style={imageStyle}
          />

          <p>
            A Java console application that demonstrates classes,
            objects, setters, and getters through a food delivery
            rider and driver management system.
          </p>
        </div>

      </div>
    </div>
  );
}