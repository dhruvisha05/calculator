import logo from './logo.svg';
import './App.css';
import { useState } from "react";


function App() {

  let [display, setdisplay] = useState("")
  let [firstval, setfirstval] = useState("")
  let [sign, setsign] = useState("")
  // let [lastval, setlastval] = useState("")

  const getdata = (x) => {
    setdisplay(display + x);
  }
  const caldata = (m) => {
    setfirstval(display)
    setdisplay("")
    setsign(m)
  }
  const handleEquals = () => {
    // setlastval(display)
    const lastval = display;
    switch (sign) {
      case 1:
        setdisplay((parseFloat(firstval) + parseFloat(lastval)));
        break;
      case 2:
        setdisplay((parseFloat(firstval) - parseFloat(lastval)));
        break;
      case 3:
        setdisplay((parseFloat(firstval) * parseFloat(lastval)));
        break;
      case 4:
        if (parseFloat(lastval) === 0) {
          setdisplay("can not divide by 0")
        } else {
          setdisplay((parseFloat(firstval) / parseFloat(lastval)))
        }
        break;
      case 5:
        if(parseFloat(lastval) === 0){
          setdisplay('can not divide by 0')
        }else{
         setdisplay((parseFloat(firstval) % parseFloat(lastval)))
        }
        break;
      default:
        setdisplay("Error");
    }
  }
  const handleClear = () => {
    setdisplay("")
  }
  const singledel = () => {
    setdisplay((prevdisplay) => prevdisplay.slice(0, -1));
  }

  return (


    <div class="main">
      <div class="top">
        <input type="text" name="" value={display} style={{ backgroundColor: "transparent", color: "white", border: "none", marginTop: "20px", marginLeft: "10px", fontSize: "20px" }}></input>
      </div>
      <div class="bottom">
        <div className='left'>
          <input type="button" name="" value={"AC"} onClick={() => handleClear()}></input>
          <input type="button" name="" value={"DEL"} onClick={() => singledel()}></input>
          <input type="button" name="" value={"%"} onClick={() => caldata(5)} ></input>
          <input type="button" name="" value={"/"} onClick={() => caldata(4)}></input>

          <input type="button" name="" value={"7"} onClick={() => getdata(7)}></input>
          <input type="button" name="" value={"8"} onClick={() => getdata(8)}></input>
          <input type="button" name="" value={"9"} onClick={() => getdata(9)} ></input>
          <input type="button" name="" value={"X"} onClick={() => caldata(3)}></input>

          <input type="button" name="" value={"4"} onClick={() => getdata(4)} ></input>
          <input type="button" name="" value={"5"} onClick={() => getdata(5)} ></input>
          <input type="button" name="" value={"6"} onClick={() => getdata(6)}></input>
          <input type="button" name="" value={"-"} onClick={() => caldata(2)}></input>

          <input type="button" name="" value={"1"} onClick={() => getdata(1)}></input>
          <input type="button" name="" value={"2"} onClick={() => getdata(2)}></input>
          <input type="button" name="" value={"3"} onClick={() => getdata(3)}></input>
          <input type="button" name="" value={"+"} onClick={() => caldata(1)}></input>

          <input type="button" name="" value={"."} onClick={() => getdata(".")} ></input>
          <input type="button" name="" value={"0"} onClick={() => getdata(0)}></input>
          <input type="button" name="" value={"00"} onClick={() => getdata("00")} ></input>
          <input type="button" name="" value={"="} onClick={() => handleEquals()}></input>

        </div>
      </div>
    </div>

  );
}

export default App;
