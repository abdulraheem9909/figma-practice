import "./App.css";
import Background from "./pages/Background/Background";
import Form from "./components/FormikForm/form";
import FormInput from "./pages/FormInput/FormInput";

const App = () => {
  return <div className="App">
  <FormInput/>
  <Form/>
  
{/*<Background/>
<Form/>*/}
  </div>
};

export default App;
