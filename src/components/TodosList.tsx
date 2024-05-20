import useStore from "../store";
import { Flex } from "@mantine/core";
import Todo from "./Todo";

const TodosList = () => {
  const { todos } = useStore();

  return (
    <Flex direction="column" gap="xs">
      {todos.map(({ id, text, completed }) => (
        <Todo id={id} text={text} completed={completed} />
      ))}
    </Flex>
  );
};

export default TodosList;
