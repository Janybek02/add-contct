import { FC } from "react";
import { IState } from "../../types/types";


export const Todo: FC<IState> = ({
  state,
  deleteTodo,
  OpenModal,
  sortTasks,
}) => {
  return (
    <>
      <div className=" w-90 flex justify-center items-center flex-col mt-5 border-red-500    ">
        {state
          .filter((el) => el.isFl === false)
          .map((el) => {
            return (
              <>
                <div className=" flex items-center w-1/2 mt-5 rounded-lg justify-around border-x-1 border-solid border-black h-20 bg-green-400 ">
                  <input
                    checked={el.isFl}
                    onChange={(e) => sortTasks(el.id, el.isFl)}
                    type="checkbox"
                  />
                  <p
                    className={el.isFl ? " text-lg text-red-700" : " text-lg  "}
                  >
                    {el.name}
                  </p>
                  <p
                    className={el.isFl ? " text-lg text-red-700" : " text-lg  "}
                  >
                    {el.last}
                  </p>
                  <p
                    className={el.isFl ? " text-lg text-red-700" : " text-lg  "}
                  >
                    {el.phone}
                  </p>

                  <button
                    onClick={() => deleteTodo(el.id)}
                    className=" text-lg bg-slate-600 px-5 py-2 rounded-lg border-b-4 border-slate-800 active:border-b-0 "
                  >
                    Click me
                  </button>
                  <button
                    onClick={() => OpenModal(el.id)}
                    className=" text-lg bg-slate-600 px-5 py-2 rounded-lg border-b-4 border-slate-800 active:border-b-0 "
                  >
                    Modal
                  </button>
                </div>
              </>
            );
          })}
        <div></div>
      </div>
      lreklwergwerewrjklwel;rktj;elrtjk
      <div className=" w-90 flex justify-center items-center flex-col mt-5 border-red-500    ">
        {state
          .filter((el) => el.isFl === true)
          .map((el) => {
            return (
              <>
                <div className=" flex items-center w-1/2 mt-5 rounded-lg justify-around border-x-1 border-solid border-black h-20 bg-green-400 ">
                  <input
                    checked={el.isFl}
                    onChange={() => sortTasks(el.id, el.isFl)}
                    type="checkbox"
                  />
                  <p
                    className={
                      el.isFl ? "text-red-700 text text-lg" : " text-lg "
                    }
                  >
                    {el.name}
                  </p>
                  <p
                    className={el.isFl ? "text-red-700  text-lg" : " text-lg "}
                  >
                    {el.last}
                  </p>
                  <p
                    className={el.isFl ? "text-red-700  text-lg" : " text-lg "}
                  >
                    {el.phone}
                  </p>

                  <button
                    onClick={() => deleteTodo(el.id)}
                    className=" text-lg bg-slate-600 px-5 py-2 rounded-lg border-b-4 border-slate-800 active:border-b-0 "
                  >
                    Click me
                  </button>
                  <button
                    onClick={() => OpenModal(el.id)}
                    className=" text-lg bg-slate-600 px-5 py-2 rounded-lg border-b-4 border-slate-800 active:border-b-0 "
                  >
                    Modal
                  </button>
                </div>
              </>
            );
          })}
        <div></div>
      </div>
    </>
  );
};
