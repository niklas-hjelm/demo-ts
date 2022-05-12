import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import TodoTask from "./TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  const addTask = (): void => {
    const newTask = { taskName: task, taskDeadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") setTask(event.target.value);
    else setDeadline(Number(event.target.value));
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task...."
            value={task}
            name="task"
            onChange={handleChange}
          ></input>
          <input
            type="number"
            value={deadline}
            placeholder="Deadline in (days left)..."
            name="deadline"
            onChange={handleChange}
          ></input>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
