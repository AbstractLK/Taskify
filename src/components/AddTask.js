import React from "react";

export const AddTask = ({ taskList, setTaskList, editTask, setEditTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTask.id) {
      const date = new Date();
      const updatedTask = taskList.map((task) =>
        task.id === editTask.id
          ? {
              id: task.id,
              name: editTask.name,
              date: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
            }
          : task
      );
      setTaskList(updatedTask);
      setEditTask("");
      e.target.task.value = "";
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        date: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      };
      setTaskList([newTask, ...taskList]);
      e.target.task.value = "";
      setEditTask("");
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={editTask.name}
          name="task"
          onChange={(e) => setEditTask({ ...editTask, name: e.target.value })}
          autoComplete="off"
          maxLength="25"
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </section>
  );
};
