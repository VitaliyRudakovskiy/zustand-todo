import "@mantine/core/styles.css";

import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Button, Container, Flex, Input, MantineProvider } from "@mantine/core";
import TodosList from "./components/TodosList";
import useStore from "./store";
import CookieConsentBanner from "./components/CookieConsentBanner";

const App = () => {
  const { addTodo, removeAll, removeCompleted } = useStore();
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (!text) return;

    const todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    addTodo(todo);
    setText("");
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") handleAddTodo();
  };

  return (
    <>
      <CookieConsentBanner />
      <MantineProvider>
        <Container fluid style={{ height: "90vh" }}>
          <Flex
            align="center"
            justify="center"
            direction="column"
            style={{ height: "100%" }}
            gap="md"
          >
            <Flex gap="md">
              <Input
                value={text}
                onChange={handleChange}
                onKeyDown={handleEnter}
                placeholder="Input task text"
              />
              <Button onClick={handleAddTodo}>Add todo</Button>
            </Flex>
            <Flex justify="space-between" gap="xl">
              <Button onClick={removeAll} color="red">
                Remove all
              </Button>
              <Button onClick={removeCompleted} color="red">
                Remove completed
              </Button>
            </Flex>
            <Flex>
              <TodosList />
            </Flex>
          </Flex>
        </Container>
      </MantineProvider>
    </>
  );
};

export default App;
