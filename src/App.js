import "./App.css";
// import FetchProducts from "./components/FetchProducts";
import ClassComponent from "./components/classcomponent/ClassComponent";
import FunctionalComponent from "./components/functionalcomponent/FunctionalComponent";
import DataGrid from "./components/InterviewQuestions/DataGrid";
import InterviewQuestions from "./components/InterviewQuestions/InterviewQuestions";
import ReactRerender from "./components/react-render/ReactRerender";

function App() {
  return (
    <div className="App">
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent/> */}
      <ReactRerender/>
      {/* <InterviewQuestions/> */}
    </div>
  );
}

export default App;
