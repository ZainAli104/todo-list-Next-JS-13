import { Fragment } from "react";
import { useState } from "react";

function TodoListPage(props) {
  const id = props.id;
  const [text, setText] = useState(props.description);
  const [textEdit, setTextEdit] = useState(false);

  function delete_() {
    props.deleteList(id);
  }

  const textEditHandler = () => {
    setTextEdit(true);
  }

  const cancelTextHandler = () => {
    setTextEdit(false)
    setText(props.description)
  }

  function changeText_() {
    props.changeText(id, text)
    setTextEdit(false)
  }

  return (
    <Fragment>
      <li className="bg-gray-200 flex flex-col sm:flex-row justify-between gap-1 p-3 rounded-lg mb-3 border border-gray-300">
        {textEdit ? (
          <>
            <input
              type='text'
              name='text'
              className="ml-3 text-lg text-[#60676e] w-[92%] lg:w-[67%]"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <div className="flex flex-row justify-around gap-2 sm:mt-0 mt-2">
              <button
                className="bg-green-500 text-white py-2 px-4 h-10 rounded-xl hover:bg-green-600 font-medium"
                onClick={changeText_}
              >
                Confirm
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 h-10 rounded-xl hover:bg-red-600 font-medium"
                onClick={cancelTextHandler}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <span className="ml-3 text-lg text-[#60676e]">
              {props.description}
            </span>
            <div className="flex flex-row justify-around gap-2 sm:mt-0 mt-2">
              <button
                className="bg-green-500 text-white py-2 px-4 h-10 rounded-xl hover:bg-green-600 font-medium"
                onClick={textEditHandler}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 h-10 rounded-xl hover:bg-red-600 font-medium"
                onClick={delete_}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </li>
    </Fragment>
  );
}

export default TodoListPage;
