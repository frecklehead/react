import Appname from "/home/frecklehead/Desktop/react/Projects/src/components/appname.jsx";
import Addtodo from "./components/apptodo";
import Todoitem from "./components/todoitem";
function App() {
  return (
    <center class=" todo-container">
      <Appname/>
      <div class="container text-center ">
        <Addtodo></Addtodo>
        <Todoitem></Todoitem>
      </div>
    </center>
  );
}

export default App;
