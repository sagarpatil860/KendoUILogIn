// import "./styles.css";
import "@progress/kendo-theme-default/dist/all.css";
import { Input } from "@progress/kendo-react-inputs";

export default function App() {
  return (
    <div className="App">
      <Input label="First name" required={true} />
    </div>
  );
}
