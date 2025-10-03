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
            {/* Bootstrap cloud slash icon */}
            <i className="bi bi-cloud-slash mb-3" style={{ fontSize: "80px", color: "#ffffffff" }}></i>

            <h3 className="mb-2" style={{ color: "#ffffffff" }}>City Not Found</h3>
            <p className="text-muted text-white"  >
                Sorry, we couldn't find weather data for <strong className="text-danger">{pros.cityName}</strong>.<br />
                Please check the spelling or try another city.
            </p>
        </div>
    );
}

