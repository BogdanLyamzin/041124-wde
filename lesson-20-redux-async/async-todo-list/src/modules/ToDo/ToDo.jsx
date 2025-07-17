import { useSelector, useDispatch } from "react-redux";

import Container from "../../shared/components/Container/Container";

import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";

import { selectTodo } from "../../redux/todo/todo-selectors";
import { addTodoThunk, deleteTodoThunk, toggleCompletedTodoThunk } from "../../redux/todo/todo-thunks";

import styles from "./ToDo.module.css";

const ToDo = () => {
    const {loading, error, items} = useSelector(selectTodo);

    const dispatch = useDispatch();

    const onAddTodo = data => {
        dispatch(addTodoThunk(data));
    }

    const onDeleteTodo = id => {
        dispatch(deleteTodoThunk(id));
    }

    const onToggleCompletedTodo = data => {
        dispatch(toggleCompletedTodoThunk(data));
    }

  return (
    <Container>
      <div className={styles.container}>
        <div>
            <ToDoForm submitForm={onAddTodo} />
            {loading && <p>Loading...</p>}
            {error && <p>Add error: {error}</p>}
        </div>
        <ToDoList items={items} onToggleCompleted={onToggleCompletedTodo} deleteTodo={onDeleteTodo} />
      </div>
    </Container>
  );
};

export default ToDo;
