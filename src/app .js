
import React from "react";
import ReactDOM from "react-dom/client"

import Header from "./components/Header";

// const parent= React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"hlo h1 kkrh"),
//         React.createElement("h2",{},"hlo h2 tagg"),
    
//     ]),
//     React.createElement("div",{id:"child2"},[
//         React.createElement("h1",{},"hlo h1 tagg"),
//         React.createElement("h2",{},"hlo h2 tagg"),
    
//     ])
// ]) 

// const root = ReactDOM.createRoot(document.getElementById("root"))
    // root.render(parent) 



// const hading= React.createElement("h1",{id:"hading"},"hlow word")
    // const root = ReactDOM.createRoot(document.getElementById("root"))
    // root.render(hading) 

  
// const jsxHeading= (<h1>hlo bsdk</h1>); 
// const root = ReactDOM.createRoot(document.getElementById("root"))
    // root.render(jsxHading)  


    // hearder
    //     logo 
    //     nav item 
    // body 
    //     serach 
    //     resturent contener
    //     card cantener
    //     footer

// const Title=()=>(
//     <div  id="functioncomponentitlrt">
//         <h1 className="Titel">it is the title1 of the functional companent</h1>

//     </div>
// )
// const Hading=()=>(
//     <div  id="function component">
//         {/* <Title/> */}
//         {Title()}
//         <h1 className="hading">it is the hading of the functional companent</h1>

//     </div>
// )

import BodyComponent from "./components/Body";












const AppLayout=()=>{
    return(
        <div className="app">
            {/* hader */}
            <Header/>
            <BodyComponent/>

        </div>
    )
}


    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<AppLayout/>)