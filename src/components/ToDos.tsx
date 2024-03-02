import { ToDo } from "../types/types";
import classes from "./ToDos.module.css";

const ToDos: React.FC<{
  toDos: ToDo[];
  onRemoveToDo: (id: number) => void;
}> = ({ toDos, onRemoveToDo }) => {
  return (
    <ul className={classes.list}>
      {toDos.map((toDo) => (
        <li className={classes.todo} key={toDo.id}>
          <div className={classes.label}>{toDo.toDo}</div>
          <span
            onClick={() => onRemoveToDo(toDo.id)}
            className={`material-symbols-outlined ${classes.close}`}
          >
            close
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ToDos;
