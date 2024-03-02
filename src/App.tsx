import { useState } from "react";
import NewToDo from "./components/NewToDo";
import ToDos from "./components/ToDos";
import { ToDo } from "./types/types";
import classes from "./App.module.css";

function App() {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const addToDo = (toDo: ToDo) => {
    setToDos((prevState) => {
      return [...prevState, toDo];
    });
  };

  const removeToDo = (id: number) => {
    const filteredToDos = toDos.filter((todo) => todo.id !== id);

    setToDos(filteredToDos);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        To Do List <span className="material-symbols-outlined">task_alt</span>
      </h1>
      <NewToDo onAddToDo={addToDo} />
      <ToDos toDos={toDos} onRemoveToDo={removeToDo} />
    </div>
  );
}

export default App;
