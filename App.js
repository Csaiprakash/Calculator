import React,{useState} from 'react'
import './App.css'
const App=()=>{
  const [result,setresult]=useState(" ")
  const onclickhandler=(e)=>{
    setresult(result.concat(e.target.name))
  }
  const clear=()=>{
    setresult("");
  }
  const backspace=()=>{
    setresult(result.slice(0,result.length-1));
  }
  const calculate=()=>{
    try{
      setresult(eval(result),toString())
    }catch(err){
      setresult("Error")
    }
  }
  return(
    <div class='box'>
      <form>
        <input type='text' value={result}></input>
      </form>
      <div class="buttons">
        <button className="main" onClick={clear} id="clear">clear</button>
        <button className="main" onClick={backspace} id="backspace">C</button>
        <button className="main" name="/" onClick={onclickhandler}>&divide;</button>
        <button className="main" name="*" onClick={onclickhandler}>&times;</button>
        <button className="main" name="-" onClick={onclickhandler}>&ndash;</button>
        <button className="main"name="+" onClick={onclickhandler}>+</button>
        <button name="7" onClick={onclickhandler}>7</button>
        <button name="8" onClick={onclickhandler}>8</button>
        <button name="9" onClick={onclickhandler}>9</button>
        <button name="6" onClick={onclickhandler}>6</button>
        <button name="5" onClick={onclickhandler}>5</button>
        <button name="4" onClick={onclickhandler}>4</button>
        <button name="3" onClick={onclickhandler}>3</button>
        <button name="2" onClick={onclickhandler}>2</button>
        <button name="1" onClick={onclickhandler}>1</button>
        <button name="0" onClick={onclickhandler}>0</button>
        <button name="." onClick={onclickhandler}>.</button>
        <button className="main" onClick={calculate}>=</button>
      </div>
    </div>
  )
}
export default App
