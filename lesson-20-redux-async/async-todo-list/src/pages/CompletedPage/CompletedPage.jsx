import { useSelector, useDispatch } from "react-redux";

import Container from "../../shared/components/Container/Container";

import ToDoList from "../../modules/ToDo/ToDoList/ToDoList";

import { selectCompletedTodo } from "../../redux/todo/todo-selectors";
import {
  deleteTodoThunk,
  toggleCompletedTodoThunk,
} from "../../redux/todo/todo-thunks";

const CompletedPage = () => {
  const completedItems = useSelector(selectCompletedTodo);

  const dispatch = useDispatch();

  const onDeleteTodo = (id) => {
    dispatch(deleteTodoThunk(id));
  };

  const onToggleCompletedTodo = (data) => {
    dispatch(toggleCompletedTodoThunk(data));
  };

  return (
    <main>
      <Container>
        {!completedItems.length && <p>All todo uncompleted</p>}
        <ToDoList
          items={completedItems}
          deleteTodo={onDeleteTodo}
          onToggleCompleted={onToggleCompletedTodo}
        />
      </Container>
    </main>
  );
};

export default CompletedPage;
