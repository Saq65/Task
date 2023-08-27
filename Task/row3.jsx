import React, { useState } from "react";

export function Row2() {
    const [inputValuesr3, setInputValuesr3] = useState("Football");
    const [inputValuesr4, setInputValuesr4] = useState(`Football is world famous game.`);
    const [phide] = useState({ display: 'block' });
    const [ihide, ishow] = useState({ display: 'none' });
    const [save_btn, save_btnshow] = useState({ display: 'block' });
   
    function change(e) {
        if (e.target.checked) {
            save_btnshow({
                display: 'none',
            },
            document.getElementById("write").innerHTML="complete"
            )
        }
        else {
           document.getElementById("write").innerHTML="";
           save_btnshow({ display: 'block' }
            ) 
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

    function handleInputChangesr2(event) {
        setInputValuesr3(event.target.value);
    };
    function handleInputChangesr3(event) {
        setInputValuesr4(event.target.value);
    };


    return (
        <>
            <td>3</td>
            <td>
                <input style={ihide} value={inputValuesr3} onChange={handleInputChangesr2} />
                <td style={phide}>{inputValuesr3}</td>
            </td>
            <td>
                <textarea style={ihide} value={inputValuesr4} onChange={handleInputChangesr3} />
                <span style={phide}>{inputValuesr4}</span>
            </td>
            <td className="d-flex flex-wrap">
                <p id="write"  ></p>
                <button style={save_btn} className="btn btn-secondary" onClick={edit}>Add</button>
                <button style={save_btn} className="btn btn-secondary" onClick={save}>Save</button>
            </td>
            <td onChange={change}>
                Mark as complete <input type="checkbox" />
            </td>
        </>
    );
}
