const TodoList = [
  {
    id: 1,
    description: "My first list...",
  },
  {
    id: 2,
    description: "My second list...",
  },
  {
    id: 3,
    description: "My third list...",
  },
];

export function AllTodoLists() {
  return TodoList;
}

export function AddNewList(list) {
  TodoList.unshift(list);
}

export function DeleteList(id) {
  TodoList.forEach((list, index) => {
    if (list.id === id) {
      TodoList.splice(index, 1);
    }
  });
}

export function changeListText(id, text) {
  const todoList = TodoList.find((list) => list.id === id);
  todoList.description = text;
}
