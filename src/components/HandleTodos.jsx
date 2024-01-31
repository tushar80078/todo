import React from "react";
import "./HandleTodos.css";

const HandleTodos = (prop) => {
  return (
    <div>
      <table>
        {prop.data.map((e) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{e.todo}</td>
                </tr>
                <tr>
                  <button
                    onClick={() => prop.gettodofromchild(e.id)}
                    id="btntwo"
                  >
                    edit
                  </button>

                  <tr>
                    <button onClick={() => prop.deletedata(e.id)} id="btnthree">
                      Delete
                    </button>
                  </tr>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default HandleTodos;
