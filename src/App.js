
import React from 'react';
import { useState, useEffect } from 'react';

function App() {

  const [time, setTime] = useState(new Date());
  const [item, setItem] = useState('0');
  let cadena = '';
  let num;
  let num1;
  let operation;
  let string_operation = "";
  let c_item;
  let initial;
  let final;
  let signos = [0, 0, 0, 0];
  let respuesta="";


  function invertirCadena(cad) {

    let nuevaCadena = "";

    for (let i = cad.length - 1; i >= 0; i--) 
      nuevaCadena += cad[i]; 
    
    return nuevaCadena;
  }

  if( item === "01") setItem("1");
  if( item === "02") setItem("2");
  if( item === "03") setItem("3");
  if( item === "04") setItem("4");
  if( item === "05") setItem("5");
  if( item === "06") setItem("6");
  if( item === "07") setItem("7");
  if( item === "08") setItem("8");
  if( item === "09") setItem("9");
  if( item === "00") setItem("0");
  if( item.length === 10 ) setItem("")

  if(item[item.length-1] === '=' ) {
    setItem("");

    c_item=item;
    c_item = c_item.split("");
    //console.log("citem",c_item);

    for (let h=0; h < item.length ;h++) {
      if(item[h] === "/") signos[0] = signos[0]+1;
      if(item[h] === "x") signos[1] = signos[1]+1;
      if(item[h] === "+") signos[2] = signos[2]+1;
      if(item[h] === "-") signos[3] = signos[3]+1;
    }
    //console.log(signos[0])

    for( let a=0; a<signos[0]; a++) {
      for( let e=0; e<c_item.length; e++) {
        if(c_item[e] === '/' ) {
          //console.log("DIVISION")
          cadena = "";
          for(let j=e-1; j >= 0; j--) {
            if(c_item[j] === "/" || c_item[j] === "x"||c_item[j] === "+"||c_item[j] === "-") {
              initial=j+1;
              break;
            } else {
              initial = 0;
            }
            cadena += c_item[j];
          }
          //console.log("initial", initial)
          //console.log("cadena--",cadena)
          //console.log("inverso",invertirCadena(cadena));
          num = invertirCadena(cadena);
          num = parseFloat(num,10);

          cadena = "";
          for(let k=e+1; k < c_item.length; k++) {
            if(c_item[k] === "/" || c_item[k] === "x"||c_item[k] === "+"||c_item[k] === "-"||c_item[k]==="=") {
              final=k;
              break;
            }
            cadena += c_item[k];
          }
          //console.log("cadena++", cadena);
          //console.log("final", final);
          num1 = parseFloat(cadena, 10);
          //console.log("num1", num1);
          operation = num/num1;
          string_operation = `${operation}`
          //console.log("string operation",string_operation);

          for(let l=0; l<string_operation.length; l++) {
            c_item.splice(final+l, 0, string_operation[l]);
          }

          //console.log("agrege",c_item)
          c_item.splice(initial, final-initial);
          //console.log("unir",c_item);
          break;
        }
      }
    }




    for( let b=0; b<signos[1]; b++) {
      for( let e=0; e<c_item.length; e++) {
        if(c_item[e] === 'x' ) {
          //console.log("MULTIPLICACION")
          cadena = "";
          for(let j=e-1; j >= 0; j--) {
            if(c_item[j] === "/" || c_item[j] === "x"||c_item[j] === "+"||c_item[j] === "-") {
              initial=j+1;
              break;
            } else {
              initial = 0;
            }
            cadena += c_item[j];
          }
          // console.log("initial", initial)
          // console.log("cadena--",cadena)
          // console.log("inverso",invertirCadena(cadena));
          num = invertirCadena(cadena);
          num = parseFloat(num,10);

          cadena = "";
          for(let k=e+1; k < c_item.length; k++) {
            if(c_item[k] === "/" || c_item[k] === "x"||c_item[k] === "+"||c_item[k] === "-"||c_item[k]==="=") {
              final=k;
              break;
            }
            cadena += c_item[k];
          }
          // console.log("cadena++", cadena);
          // console.log("final", final);
          num1 = parseFloat(cadena, 10);
          //console.log("num1", num1);
          operation = num*num1;
          string_operation = `${operation}`
          //console.log("string operation",string_operation);

          for(let l=0; l<string_operation.length; l++) {
            c_item.splice(final+l, 0, string_operation[l]);
          }

          //console.log("agrege",c_item)
          c_item.splice(initial, final);
          //console.log("unir",c_item);
        }
      }
    }


    for( let c=0; c<signos[2]; c++) {
      for( let e=0; e<c_item.length; e++) {
        if(c_item[e] === '+' ) {
          // console.log("SUMA")
          cadena = "";
          for(let j=e-1; j >= 0; j--) {
            if(c_item[j] === "/" || c_item[j] === "x"||c_item[j] === "+"||c_item[j] === "-") {
              initial=j+1;
              break;
            } else {
              initial = 0;
            }
            cadena += c_item[j];
          }
          // console.log("initial", initial)
          // console.log("cadena--",cadena)
          // console.log("inverso",invertirCadena(cadena));
          num = invertirCadena(cadena);
          num = parseFloat(num,10);

          cadena = "";
          for(let k=e+1; k < c_item.length; k++) {
            if(c_item[k] === "/" || c_item[k] === "x"||c_item[k] === "+"||c_item[k] === "-"||c_item[k]==="=") {
              final=k;
              break;
            }
            cadena += c_item[k];
          }
          // console.log("cadena++", cadena);
          // console.log("final", final);
          num1 = parseFloat(cadena, 10);
          // console.log("num1", num1);
          operation = num+num1;
          string_operation = `${operation}`
          // console.log("string operation",string_operation);

          for(let l=0; l<string_operation.length; l++) {
            c_item.splice(final+l, 0, string_operation[l]);
          }

          // console.log("agrege",c_item)
          c_item.splice(initial, final);
          // console.log("unir",c_item);
        }
      }
    }



    for( let d=0; d<signos[3]; d++) {
      for( let e=0; e<c_item.length; e++) {
        if(c_item[e] === '-' ) {
          // console.log("RESTA")
          cadena = "";
          for(let j=e-1; j >= 0; j--) {
            if(c_item[j] === "/" || c_item[j] === "x"||c_item[j] === "+"||c_item[j] === "-") {
              initial=j+1;
              break;
            } else {
              initial = 0;
            }
            cadena += c_item[j];
          }
          // console.log("initial", initial)
          // console.log("cadena--",cadena)
          // console.log("inverso",invertirCadena(cadena));
          num = invertirCadena(cadena);
          num = parseFloat(num,10);

          cadena = "";
          for(let k=e+1; k < c_item.length; k++) {
            if(c_item[k] === "/" || c_item[k] === "x"||c_item[k] === "+"||c_item[k] === "-"||c_item[k]==="=") {
              final=k;
              break;
            }
            cadena += c_item[k];
          }
          // console.log("cadena++", cadena);
          // console.log("final", final);
          num1 = parseFloat(cadena, 10);
          // console.log("num1", num1);
          operation = num-num1;
          string_operation = `${operation}`
          // console.log("string operation",string_operation);

          for(let l=0; l<string_operation.length; l++) {
            c_item.splice(final+l, 0, string_operation[l]);
          }

          // console.log("agrege",c_item)
          c_item.splice(initial, final);
          // console.log("unir",c_item);
        }
      }
    }





    for( let z=0; z<c_item.length-1; z++) {
      respuesta += c_item[z];
    }
    console.log("respuesta",respuesta);
    setItem(respuesta)
  }


  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);


  return (
    <>
      <main>

        <div className='container'>

          <div className='time'>
            {time.toLocaleTimeString()}
          </div>
          <div className='result'>
            <button className='reset' onClick={() => setItem('0')}>
              C
            </button>
            {item}
          </div>
          <div className='buttons'>
            <div className='button'>
              <button className='button-press' onClick={() => setItem(item + '7')}>7</button>
            </div>
            <div className='button'>
              <button className='button-press' onClick={() => setItem(item + '8')}>8</button>
            </div>
            <div className='button'>
              <button className='button-press' onClick={() => setItem(item + '9')}>9</button>
            </div>
            <div className='button'>
              <button className='button-press operator' onClick={() => setItem(item + '/')}>/</button>
            </div>
            <div className='button'>
              <button className='button-press' onClick={() => setItem(item + '4')}>4</button>
            </div>
            <div className='button'>
              <button className='button-press' onClick={() => setItem(item + '5')}>5</button>
            </div>
            <div className='button'>
              <button className='button-press' onClick={() => setItem(item + '6')}>6</button>
            </div>
            <div className='button'>
              <button className='button-press operator' onClick={() => setItem(item + 'x')}>x</button>
            </div>
            <div className='button'>
              <button className='button-press' onClick={() => setItem(item + '1')}>1</button>
            </div>
            <div className='button'>
              <button className='button-press' onClick={() => setItem(item + '2')}>2</button>
            </div>
            <div className='button'>
              <button className='button-press' onClick={() => setItem(item + '3')}>3</button>
            </div>
            <div className='button'>
              <button className='button-press operator' onClick={() => setItem(item + '+')}>+</button>
            </div>
            <div className='button'>
              <button className='button-press'  onClick={() => setItem(item + '0')}>0</button>
            </div>
            <div className='button'>
              <button className='button-press' onClick={() => setItem(item + '.')}>.</button>
            </div>
            <div className='button'>
              <button className='button-press operator' onClick={() => setItem(item + '=')}>=</button>
            </div>
            <div className='button'>
              <button className='button-press operator' onClick={() => setItem(item + '-')}>-</button>
            </div>
          </div>

        </div>

      </main>
    </>
  );
}

export default App;
