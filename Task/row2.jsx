import React, { useState } from "react";

export function Row() {
  const [inputValuesr, setInputValuesr] = useState("cricket");
  const [inputValuesr2, setInputValuesr2] = useState("Cricket is good game.");
  const [phide] = useState({ display: 'block' });
  const [ihide, ishow] = useState({ display: 'none' });
  const [save_btn, save_btnshow] = useState({ display: 'block' });
  function change(e) {
    if (e.target.checked) {
      save_btnshow({
        display: 'none'
      },
      document.getElementById("write2").innerHTML="complete"
      )
    } else {
        document.getElementById("write2").innerHTML="";
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

  function handleInputChangesr(event) {
    setInputValuesr(event.target.value);
  };
  function handleInputChangesr2(event) {
    setInputValuesr2(event.target.value);
  };
 

  return (
      <>
          <td>2</td>
          <td>
            <input style={ihide} value={inputValuesr} onChange={handleInputChangesr} />
            <td style={phide}>{inputValuesr}</td>
          </td>
          <td>
            <textarea style={ihide} value={inputValuesr2} onChange={handleInputChangesr2} />
            <span style={phide}>{inputValuesr2}</span>
          </td>
          <td className="d-flex flex-wrap">
          <p id="write2"  ></p>
            <button style={save_btn} className="btn btn-secondary" onClick={edit}>Add</button>
            <button style={save_btn} className="btn btn-secondary" onClick={save}>Save</button>
           
          </td>
          <td onChange={change}>
            Mark as complete <input type="checkbox" />
          </td>
      </>
  );
}
