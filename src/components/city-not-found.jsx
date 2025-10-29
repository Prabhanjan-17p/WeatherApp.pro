import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function CityNotFound(pros) {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center text-center p-5"
            style={{
                minHeight: "300px",
                backgroundColor: "rgba(137, 190, 236, 0.211)",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                marginTop: "-100px"
            }}
        >
            
            <i className="bi bi-cloud-slash mb-3" style={{ fontSize: "80px", color: "#ffffffff" }}></i>

            <h3 className="mb-2" style={{ color: "#ffffffff" }}>City Not Found</h3>
            <p className="text-muted text-white mt-2">
                <span
                    style={{
                        color: "white",
                        opacity: "0.8",
                        textAlign: "justify",        
                        textJustify: "inter-word",   
                        lineHeight: "1.6",           
                        fontSize: "clamp(14px, 2vw, 16px)", 
                        maxWidth: "420px",           
                        display: "block",            
                        margin: "0 auto",            
                    }}
                >
                    Sorry, we couldn't find weather data for{" "}
                    <strong className="text-danger">{pros.cityName}</strong>.
                    Please check the spelling or try another city.
                </span>
            </p>

        </div>
    );
}

