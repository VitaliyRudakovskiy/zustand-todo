import useStore from "../store";
import { TodoType } from "@/types/TodoType";
import { Checkbox, CloseButton, Flex, Text } from "@mantine/core";

const Todo = ({ id, text, completed }: TodoType) => {
  const { removeTodo, toggleComplete } = useStore();

  return (
    <Flex justify="space-between" align="center" w={300}>
      <Flex gap="sm">
        <Checkbox checked={completed} onChange={() => toggleComplete(id)} />
        <Text>{text}</Text>
      </Flex>
      <CloseButton onClick={() => removeTodo(id)} size="sm" />
    </Flex>
  );
};

export default Todo;
