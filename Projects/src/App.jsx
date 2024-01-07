import Appname from "/home/frecklehead/Desktop/react/Projects/src/components/appname.jsx";
import Addtodo from "./components/apptodo";
import Todoitem from "./components/todoitem";
import "/home/frecklehead/Desktop/react/Projects/src/app.css"

function App() {
  return (
    <>
    
    
    <center class=" todo-container">
    <Appname/>
  <Addtodo></Addtodo>
        <Todoitem></Todoitem>
     
    </center>
    </>
   
  );
}

export default App;
