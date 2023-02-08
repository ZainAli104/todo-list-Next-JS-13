import { Fragment } from "react";
import React, { useState, useEffect } from "react";

import TodoList from "@/components/TodoList";
import {
  AllTodoLists,
  AddNewList,
  DeleteList,
  changeListText,
} from "../data/ListData.js";

function Home() {
  const [text, setText] = useState("");
  const [todoLists, setTodoLists] = useState(null);
  const [timeOut, setTimeOut] = useState(null);

  useEffect(() => {
    setTodoLists(AllTodoLists());
  }, []);

  const addNewListHandler = (e) => {
    e.preventDefault();

    const list = {
      id: Date.now().toString() + Math.floor(Math.random() * 100).toString(),
      description: text,
    };
    AddNewList(list);
    const Lists = AllTodoLists();
    setTodoLists(Lists);
    setText("");
  };

  const deleteListHandler = (id) => {
    DeleteList(id);
    clearTimeout(timeOut);

    setTimeOut(
      setTimeout(() => {
        const Lists = AllTodoLists();
        setTodoLists(Lists);
      }, 10)
    );
  };

  const changeTextHandler = (id, text) => {
    changeListText(id, text);
    clearTimeout(timeOut);

    setTimeOut(
      setTimeout(() => {
        const Lists = AllTodoLists();
        setTodoLists(Lists);
      }, 10)
    );
  };

  return (
    <Fragment>
      <div className="bg-blue-500 ">
        <div className="flex flex-col items-center min-h-screen">
          <div className="bg-green-500 p-5 mt-9 mx-auto sm:w-[80%] lg:w-[65%] w-[95%] rounded-lg">
            <h1 className="text-white text-3xl font-bold underline text-center">
              Todo List
            </h1>
          </div>
          <div className="bg-gray-100 p-5 mb-4 mt-3 mx-auto sm:w-[80%] lg:w-[65%] w-[95%] rounded-lg">
            <form className="flex justify-between" onSubmit={addNewListHandler}>
              <input
                type="text"
                name="text"
                className="text-lg text-[#60676e] p-2 sm:ml-1 sm:w-[90%] w-3/4 rounded-xl border border-gray-400 border-opacity-75 focus:ring-[#60676e] focus:border-[#60676e] outline-none block"
                placeholder="Add new list"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                required
              />
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600"
              >
                Add
              </button>
            </form>
            <ul className="text-left list-none p-0 mt-5">
              {todoLists ? (
                <>
                  {todoLists.map((list) => (
                    <TodoList
                      key={list.id}
                      id={list.id}
                      description={list.description}
                      deleteList={deleteListHandler}
                      changeText={changeTextHandler}
                    ></TodoList>
                  ))}
                </>
              ) : (
                <div>No list found!</div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
