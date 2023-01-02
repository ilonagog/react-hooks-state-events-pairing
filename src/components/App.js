import video from "../data/video.js";
import Title from "./Title.js";
import Home from "./Home.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      < Home />
      < Comment />
      < Title title={video.title} views={video.views} />
    </div>
  );
}

export default App;
