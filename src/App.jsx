import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import Project from "./component/project";
import Count from "./component/Count";



function App() {

    function handleProject(title) {
        console.log("Opening:", title);
    }

    return (
        <div>
          <Count/>
            <h1>My Projects</h1>

            <Project
                title="Student Performance Prediction"
                des="Predict CGPA and placement probability"
                tech="Python + Machine Learning"
                onView={handleProject}
            />

            <Project
                title="Travel AI Agent"
                des="AI travel planning application"
                tech="React + LangChain"
                onView={handleProject}
            />

            <Project
                title="Lung AI"
                des="AI-based medical prediction project"
                tech="Python + FastAPI"
                onView={handleProject}
            />
        </div>
    );
}



export default App;