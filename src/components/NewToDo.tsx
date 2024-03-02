import { useRef } from "react";
import { ToDo } from "../types/types";
import classes from "./NewToDo.module.css";

const NewToDo: React.FC<{ onAddToDo: (toDo: ToDo) => void }> = ({
  onAddToDo,
}) => {
  const toDoText = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = toDoText.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    const toDo = {
      id: Math.random(),
      toDo: enteredText,
    };

    onAddToDo(toDo);
    toDoText.current!.value = "";
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        className={classes.input}
        ref={toDoText}
        type="text"
        id="todotext"
        placeholder="Add a new to do..."
        required
      />
      <button className={classes.button}>Add</button>
    </form>
  );
};

export default NewToDo;
