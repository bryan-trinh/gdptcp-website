// CSS Styles
import "../scss/styles.scss";

// React
import ReactDOM from "react-dom";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

import logo from "../assets/lotus.png";

/* Main App
 * Developed by Bryan Trinh
 */
export const ThemeContext = createContext(null);

const App = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () =>{
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            <div className="App" id={theme}>

                <div class="container-fluid py-4 mx-auto">
                    <div className="switch">
                        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
                    </div>
                    
                    <div className="main-banner-text">
                        <div>
                            <img src={require("../assets/lotus.png")}/>
                            <h1>Gia Đình Phật Tử Chánh Pháp</h1>
                        </div>
                        <subtitle>Built using Bootstrap, Parcel, and React</subtitle>
                    </div>
                    <button id="testBtn" class="btn btn-outline-primary">TestBtn</button>
                </div>
            </div>
        </ThemeContext.Provider>

        
    )
}
ReactDOM.render(<App />, document.getElementById("root"))

document.getElementById("testBtn").addEventListener("click", testFunction);
function testFunction(event){
    const btn = event.target;
    alert("The button will be disabled for 5 seconds");
    btn.setAttribute("disabled", "");
    
    countDown(btn, btn.innerText);
}
var count = 5;
function countDown(obj, text){
    if(count !== 0){
        obj.innerText = count;
        setTimeout(countDown.bind(this, obj, text), 1000);
        count--;
    }
    else{
        obj.removeAttribute("disabled");
        count = 5;
        obj.innerText = text;
    }
}

export default App;