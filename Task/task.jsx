import React, { useState } from "react";
import { Row } from "./row2";
import { Row2 } from "./row3";
import { Home } from "./homepage";
export function Task() {
  const [inputValue, setInputValue] = useState("saqlain");
  const [inputValue2, setInputValue2] = useState("I am a web-developer");
  const [phide] = useState({ display: 'block' });
  const [ihide, ishow] = useState({ display: 'none' });
  const [save_btn, save_btnshow] = useState({ display: 'block' });
  const [task, settask] = useState();
  const [thide, setthide] = useState({ display: 'block' });
  const [btn, setbtn] = useState({ display: 'block' })

  function Return() {
    settask(<Home />);
    setthide({
      display: 'none'
    });
    setbtn({ display: 'none' })

  }
  function change(e) {
    if (e.target.checked) {
      save_btnshow({
        display: 'none'
      },
        document.getElementById("write3").innerText = "complete"
      )
    } else {
      document.getElementById("write3").innerText = "";
      save_btnshow({ display: 'block' })
    }
  }
  function save(e) {
    if (e.target.click) {
      ishow({
        display: 'none'
      })
    } else if (e.target.value !== true) {

    }
  }

  function edit(e) {
    if (e.target.click) {
      ishow({
        display: 'block',
        border: '2px inset black'
      })
    }
    else { ishow({ display: 'block' }) }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  };
  function handleInputChange2(event) {
    setInputValue2(event.target.value);
  };


  return (
    <>

      <div className="container-fluid mt-4  d-flex justify-content-center">
        <table style={thide} className="table table-bordered border-dark w-100">
          <th style={btn}>
            <button className="btn btn-warning text-light d-block w-50 p-2 " onClick={Return}>Add new task</button>
          </th>
          <thead>
            <tr className="border border-dark">
              <th>Sr no.</th>
              <th>Title</th>
              <th>description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <input style={ihide} value={inputValue} onChange={handleInputChange} />
                <td style={phide}>{inputValue}</td>
              </td>
              <td>
                <textarea style={ihide} value={inputValue2} onChange={handleInputChange2} />
                <span style={phide}>{inputValue2}</span>
              </td>
              <td className="d-flex flex-wrap">
                <p id="write3"  ></p>
                <button style={save_btn} className="btn btn-secondary" onClick={edit}>Add</button>
                <button style={save_btn} className="btn btn-secondary" onClick={save}>Save</button>

              </td>
              <td onChange={change}>
                Mark as complete <input type="checkbox" />
              </td>
            </tr>
            <tr>
              {
                <Row />
              }
            </tr>
            <tr>
              {
                <Row2 />
              }
            </tr>
          </tbody>
        </table>
        <div>
          {task}
        </div>
      </div>
    </>
  );
}
