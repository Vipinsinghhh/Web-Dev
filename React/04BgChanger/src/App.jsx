// APPROACH 1: Inline event handlers (directly call setColor in onClick)


import {useState} from "react";

function App() {
  let [color, setColor] = useState("olive")

  return (
    <>
      <div style={{backgroundColor: color}} className="w-full h-screen duration-200">

        <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button onClick={()=>setColor('red')}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} >Red</button>

            <button onClick={()=>setColor("green")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>

            <button onClick={()=>setColor("blue")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>

            <button onClick={()=>setColor("white")}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>white</button>

            <button onClick={()=>setColor("olive")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>olive</button>

            <button onClick={()=>setColor("grey")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}>Grey</button>

            <button onClick={()=>setColor("yellow")}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>

            <button onClick={()=>setColor("pink")}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>

            <button onClick={()=>setColor("purple")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>purple</button>

            <button onClick={()=>setColor("lavender")}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"lavender"}}>lavender</button>

            <button onClick={()=>setColor("black")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


// APPROACH 2: Separate named handler functions for each color button

// import {useState} from "react";

// function App() {
//   let [color, setColor] = useState("olive")

//  const redBg = ()=> {
//     setColor("red");
//   }
//   const greenBg = ()=> {
//     setColor("green");
//   }
//   const blueBg = ()=> {
//     setColor("blue");
//   }
//   const whiteBg = ()=> {
//     setColor("white");
//   }
//   const oliveBg = ()=> {
//     setColor("olive");
//   }
//   const greyBg = ()=> {
//     setColor("grey");
//   }
//   const yellowBg = ()=> {
//     setColor("yellow");
//   }
//   const pinkBg = ()=> {
//     setColor("pink");
//   }
//   const purpleBg = ()=> {
//     setColor("purple");
//   }
//   const lavenderBg = ()=> {
//     setColor("lavender");
//   }
//   const blackBg = ()=> {
//     setColor("black");
//   } 
    
//    return (
//     <>
//       <div style={{backgroundColor: color}} className="w-full h-screen duration-200">

//         <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

//           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

//             <button onClick={redBg}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} >Red</button>

//             <button onClick={greenBg}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>

//             <button onClick={blueBg}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>

//             <button onClick={whiteBg}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>white</button>

//             <button onClick={oliveBg}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>olive</button>

//             <button onClick={greyBg}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}>Grey</button>

//             <button onClick={yellowBg}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>

//             <button onClick={pinkBg}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>

//             <button onClick={purpleBg}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>purple</button>

//             <button onClick={lavenderBg}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"lavender"}}>lavender</button>

//             <button onClick={blackBg}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default App



// Approach: Data-driven UI – generating buttons dynamically using .map()

// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("black");

//   const colors = [
//     { name: "Red", value: "red", cls: "bg-red-600 text-white" },
//     { name: "Green", value: "green", cls: "bg-green-600 text-white" },
//     { name: "Blue", value: "blue", cls: "bg-blue-600 text-white" },
//     { name: "Olive", value: "#556B2F", cls: "bg-[#556B2F] text-white" },
//     { name: "Gray", value: "gray", cls: "bg-gray-500 text-white" },
//     { name: "Yellow", value: "yellow", cls: "bg-yellow-300 text-black" },
//     { name: "Pink", value: "pink", cls: "bg-pink-300 text-black" },
//     { name: "Purple", value: "purple", cls: "bg-purple-700 text-white" },
//     { name: "Lavender", value: "#E6E6FA", cls: "bg-purple-200 text-black" },
//     { name: "White", value: "white", cls: "bg-white text-black" },
//     { name: "Black", value: "black", cls: "bg-black text-white" },
//   ];

//   return (
//     <div
//       className="h-screen w-full transition-all duration-300"
//       style={{ backgroundColor: color }}
//     >

//       {/* bottom color bar */}
//       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl px-4 py-3 flex gap-3 flex-wrap">
//         {colors.map((c, i) => (
//           <button
//             key={i}
//             onClick={() => setColor(c.value)}
//             className={`px-4 py-2 rounded-full text-sm font-semibold ${c.cls} hover:scale-110 active:scale-95 transition`}
//           >
//             {c.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;