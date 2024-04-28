import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Heading, VStack, HStack } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <VStack p={8}>
      <Heading mb={6}>Todo List</Heading>
      <HStack>
        <Input placeholder="Add a new task" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <IconButton icon={<FaPlus />} onClick={handleAddTodo} colorScheme="blue" aria-label="Add todo" />
      </HStack>
      <List spacing={3} mt={4} w="100%">
        {todos.map((todo, index) => (
          <ListItem key={index} p={2} bg="gray.100" borderRadius="md">
            <HStack justify="space-between">
              <Box>{todo}</Box>
              <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
