import { useState } from "react";
import Load from "./Load.jsx";
import '../App.css'
 
function Loader() {
    const [isLoading, setIsLoading] = useState(true);
 
    setTimeout(() => {
        setIsLoading(false);
    }, 3200);
    setTimeout(() => {
        window.location.href = "/EnteryPage"
    }, 3000);
    return (
        <div className="Loading"
            style={{
                textAlign: "center",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            >
            {isLoading ? (
                <div
                style={{
                    width: "100px",
                    margin: "auto",
                    position: "absolute",
                    top: "40%"
                    }}
                >
                    <Load />
                </div>
            ) : (
                <div>
                </div>
            )}
        </div>

    );
}
 
export default Loader;