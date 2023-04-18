import {ChangeEvent} from "react"

export type State = {
    name: string;
    last: string;
    phone: string;
    id: number;
    isFl: boolean;
  };
  export type change = {
    name: string;
    last: string;
    phone: string;
    id: number;
    isFl: boolean;
  };
  export type error = {
    name: string;
    last: string;
    phone: string;
    all: string;
  };

  
export interface IState {
    state: State[];
    deleteTodo: (id: number) => void;
    OpenModal: (id: number) => void;
    modal: boolean;
    sortTasks: (id: number, isFl: boolean) => void;
  }

  export interface IModal {
    modal: boolean;
    state: State[];
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    addToNewState: (id: number) => void;
    closeModal: () => void;
  
    newChange: change;
  }