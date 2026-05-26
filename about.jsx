// Import personal image from assets folder
import me from '../src/assets/Me.jpg';

// About component
export default function About() {
  return (
    <div>

      {/* Page heading */}
      <h2>About Me</h2>

      {/* Personal introduction paragraph */}
      <p>
        Hello my name is Malachi Aird-Tennant, I am currently attending
        Centennial College studying to become a software engineer.
        I've been enrolled for about a year now taking many courses
        involving Java programming and website creation to really test
        my coding skills. I always work hard trying to be the best
        student I can be!
      </p>

      {/* Personal profile picture */}
      <img
        src={me}
        alt="Malachi Aird-Tennant"
        className="Malachi"
        width="170px"
        height="170px"
      />

    </div>
  );
}