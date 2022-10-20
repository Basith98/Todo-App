import { useEffect, useState } from "react";
import { FaEraser } from 'react-icons/fa';

import "./App.css";

function App() {
  let [toDos, setToDos] = useState([]);
  let [toDo, setToDo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        {/* <h2>Whoop, it's Wednesday 🌝 ☕ </h2> */}
      </div>
      <div className="input">
        <input
          type="text"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          placeholder="🖊️ Add item..."
        />
      
        <i
          onClick={() => {
            setToDos([
              ...toDos,
              { id: Date.now(), text: toDo, status: false, exit: false },
            ]);
            setToDo("");
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((value) => {
          if (!value.exist) {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      console.log(e.target.checked);
                      console.log(value);
                      setToDos(
                        toDos.filter((obj) => {
                          if (obj.id === value.id) {
                            obj.status = e.target.checked;
                          }
                          return obj;
                        })
                      );
                    }}
                    value={value.status}
                  />
                  <p>{value.text}</p>
                </div>
                <div className="right">
                  <i
                    className="fas fa-times"
                    onClick={() => {
                      setToDos(
                        toDos.filter((obj) => {
                          if (obj.id === value.id) {
                            obj.exist = true;
                          }
                          return obj;
                        })
                      );
                    }}
                  ></i>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}

        {toDos.map((obj) => {
          if (obj.status) {
            return <h2>{obj.text}</h2>;
          }
        })}
      </div>
    </div>
  );
}

export default App;
