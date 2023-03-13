import React, { useContext, useEffect, useRef } from "react";
import GlobalContext from "../context/GlobalContext";

function Header() {
  const nameRef = useRef("");
  const { addName, allNames, editName, updateName } = useContext(GlobalContext);

  useEffect(() => {
    console.log(allNames);
    if (editName.edit === true) {
      nameRef.current.value = editName.name.name;
    }
  }, [editName]);
  // useEffect(() => {
  //   if (editFeedback.edit === true) {
  //     setBtnDisabled(false);
  //     setText(editFeedback.item.text);
  //     setRating(editFeedback.item.rating);
  //   }
  // }, [editFeedback]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
    };

    if (editName.edit === true) {
      updateName(editName.name.id, data);
    } else {
      addName(data.name);
      //addFeedback(newFeedback);
    }
    nameRef.current.value = "";
  };

  return (
    <>
      <section className="relative w-full max-w-md px-5 pt-2 mx-auto rounded-md">
        <h3 className="text-gray-800 font-semibold text-lg py-4">
          Enter a list of names separated by commas:
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="relative flex justify-between">
            <input
              type="text"
              ref={nameRef}
              className=" py-3 pl-4 pr-2 flex-auto text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
              placeholder="Type here..."
            />
            <button
              type="submit"
              className="bg-blue-700 text-white text-center rounded-md px-3"
            >
              Add Name
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Header;
