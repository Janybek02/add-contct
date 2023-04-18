import React, { FC, ReactHTML, ChangeEvent, useState } from "react";
import { Todo } from "./components/todo/todo";
import { Modal } from "./components/modal/Modal";
import "./App.scss";
import {State, error, change} from "./types/types"

const App: FC = () => {
  const [state, setState] = useState<State[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [error, setError] = useState<error>({
    name: "",
    last: "",
    phone: "",
    all: "",
  });
  const [change, setChange] = useState<change>({
    name: "",
    last: "",
    phone: "",
    id: 0,
    isFl: false,
  });
  const [newChange, setNewChange] = useState<change>({
    name: "",
    last: "",
    phone: "",
    id: 0,
    isFl: false,
  });

  const ChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setChange({ ...change, name: event.target.value });
  };
  const ChangeLast = (event: ChangeEvent<HTMLInputElement>): void => {
    setChange({ ...change, last: event.target.value });
  };
  const ChangePhone = (event: ChangeEvent<HTMLInputElement>): void => {
    setChange({ ...change, phone: event.target.value });
  };

  const onClick = (): void => {
    if (change.name === "" && change.last === "" && change.phone === "")
      return setError({ ...error, all: "Поля не должен быть пустым" });
    else {
      if (change.name === "")
        return setError({ ...error, name: "Имя не должен быть пустым" });
      if (change.last === "") return setError({ ...error, last: "last" });
      if (change.phone === "") return setError({ ...error, phone: "phone" });
      else {
        const newId = {
          ...change,
          id: state.length ? state.length : 0,
          isFl: false,
        };
        setState([...state, newId]);
        setChange({
          name: "",
          last: "",
          phone: "",
          id: 0,
          isFl: false,
        });
      }
    }
    setError({
      name: "",
      last: "",
      phone: "",
      all: "",
    });
  };
  const addToNewState = (id: number): void => {
    setState((state) =>
      state.map((item) => (item.id === id ? { ...item, ...newChange } : item))
    );
    setModal(!modal);
    setNewChange({
      name: "",
      last: "",
      phone: "",
      id: 0,
      isFl: false,
    });
  };

  const deleteTodo = (id: number): void => {
    setState((state) => state.filter((el) => el.id !== id));
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewChange({ ...newChange, [e.target.name]: e.target.value });
  };

  const OpenModal = (id: number): void => {
    setModal(!modal);
    // setNewChange({...state})
    const intialS: any = state.map((el) =>
      el.id === id ? setNewChange({ ...el }) : el
    );
    return intialS;
  };
  const closeModal = (): void => {
    setModal(!modal);
  };
  const sortTasks = (id: number, isFl: boolean): void => {
    setState(state.map((el) => (el.id === id ? { ...el, isFl: !isFl } : el)));
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-teal-300 w-20/12 h-16 ">
        <input
          onChange={ChangeName}
          type="text"
          name="change.name"
          value={change.name}
          className=" w-64 h-8 border rounded text-base "
        />
        {error.all || error.name}
        <input
          value={change.last}
          onChange={ChangeLast}
          type="text"
          name="change.last"
          className=" ml-5 w-64 h-8 rounded text-base  "
        />
        {error.all || error.last}
        <input
          value={change.phone}
          onChange={ChangePhone}
          type="tel"
          name="phone"
          className="ml-5 w-64 h-8 rounded text-base"
        />
        {error.all || error.phone}
        <button
          onClick={onClick}
          className="  ml-7 bg-white text-yellow-950 w-20 h-7 rounded  "
        >
          click me
        </button>
      </div>
      <Todo
        state={state}
        sortTasks={sortTasks}
        deleteTodo={deleteTodo}
        modal={modal}
        OpenModal={OpenModal}
      />
      <Modal
        modal={modal}
        state={state}
        newChange={newChange}
        handleChange={handleChange}
        closeModal={closeModal}
        addToNewState={addToNewState}
      />
    </div>
  );
};

export default App;
