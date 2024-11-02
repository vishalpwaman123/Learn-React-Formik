import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import LogIn from "./components/LogIn";
import FormikContainer from "./components/reusable/FormikContainer";
import Registration from "./components/Registration";
import EnrollmentForm from "./components/EnrollmentForm";
function App() {
  return (
    <div className="App">
      <EnrollmentForm />
    </div>
  );
}

export default App;
