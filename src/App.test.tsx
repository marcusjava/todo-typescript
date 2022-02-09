/* eslint-disable testing-library/no-debugging-utils */
import React, { FC } from "react";
import {
  render,
  screen,
  RenderResult,
  RenderOptions,
  fireEvent,
  within,
} from "@testing-library/react";

import App from "./App";
import { TodoContext } from "./context/todo";
import { Todo } from "./types";

const todos = [
  { description: "todo1", completed: true },
  { description: "todo2", completed: false },
  { description: "todo3", completed: false },
];

const customRender = (
  ui: React.ReactElement,
  { providerProps, ...renderOptions }: any
) => {
  return render(
    <TodoContext.Provider {...providerProps}>{ui}</TodoContext.Provider>,
    renderOptions
  );
};

describe("App component test", () => {
  const addTodo = jest.fn();
  const deleteTodo = jest.fn();
  const updateTodo = jest.fn();
  test("should render no tasks", () => {
    const providerProps = {
      value: {
        todos: [],
        addTodo,
        deleteTodo,
        updateTodo,
      },
    };
    customRender(<App />, { providerProps });
    expect(screen.getByText("Todo App With Typescript")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Adicione uma tarefa")
    ).toBeInTheDocument();
    expect(screen.getByText("Sem tarefas")).toBeInTheDocument();
  });

  test("should render 3 tasks correctly", async () => {
    const providerProps = {
      value: {
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
      },
    };
    const { debug } = customRender(<App />, { providerProps });

    const items = await screen.findAllByTestId("todo-item");
    expect(items.length).toEqual(3);
    expect(screen.getByText("todo1")).toBeInTheDocument();
    expect(screen.getByText("todo2")).toBeInTheDocument();
    expect(screen.getByText("todo3")).toBeInTheDocument();
  });

  test("should click on checkbox to mark as completed and change text and color of container", async () => {
    const providerProps = {
      value: {
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
      },
    };
    const { debug } = customRender(<App />, { providerProps });

    const items = await screen.findAllByTestId("todo-item");
    const task1 = items[0];

    const checkbox = within(task1).getByTestId("checkbox");
    const description = within(task1).getByText("todo1");
    expect(description).toHaveStyle("text-decoration: none");
    expect(task1).toHaveStyle("background-color: #E5E5E5");
    fireEvent.click(checkbox);
    expect(task1).toHaveStyle("background-color: #97C160");
    expect(description).toHaveStyle("text-decoration: line-through");
  });

  test("should click on delete button", async () => {
    const providerProps = {
      value: {
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
      },
    };
    const { debug } = customRender(<App />, { providerProps });

    const items = await screen.findAllByTestId("todo-item");
    const task1 = items[0];

    const deleteButton = within(task1).getByTestId("delete");
    fireEvent.click(deleteButton);
  });
});
