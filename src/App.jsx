
import AppUI from "./AppUI";
import { ToDoProvider } from "./components/ToDoContext/ToDoContext";
import './Styles/General.css';
import './Styles/App.css';
import './Styles/Items.css';





export default function App() {



 return(
<>
  <ToDoProvider>
<AppUI></AppUI>
</ToDoProvider>
</>



 )
}
