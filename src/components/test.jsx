import "./test.css";

export function TestPage(pros) {


    return (
        <div class="container-fluid ">
            <div className="mob-card-desc">
                <div className="hide-box1">
                    <div className="card card-item" style={{backgroundColor:"rgb(234 230 230 / 8%)"}}>
                        <div className="d-flex ">
                            <span
                                className="circle-white d-flex justify-content-center align-items-center me-2"
                                
                            >
                                <i
                                    className="bi bi-sunrise"
                                    style={{ fontSize: "10px", color: "white" }}
                                ></i>
                            </span>
                            <p className="title ">Visibility</p>
                        </div>
                        <h3  >{(pros.visibility / 1000).toFixed(1)} km</h3>
                    </div>
                    <div className="card card-item" style={{backgroundColor:"rgb(234 230 230 / 8%)"}}>
                        <div className="d-flex ">
                            <span
                                className="circle-white d-flex justify-content-center align-items-center me-2"
                                
                            >
                                <i
                                    className="bi bi-thermometer-half"
                                    style={{ fontSize: "10px", color: "white" }}
                                ></i>
                            </span>
                            <p className="title ">Pressure</p>
                        </div>
                        <h3  >{pros.pressure} hPa</h3>
                    </div>        
                </div>
                <div className="hide-box1">
                               <div className="card card-item" style={{backgroundColor:"rgb(234 230 230 / 8%)"}}>
                        <div className="d-flex ">
                            <span
                                className="circle-white d-flex justify-content-center align-items-center me-2"
                                
                            >
                                <i
                                    className="bi bi-droplet-half"
                                    style={{ fontSize: "10px", color: "white" }}
                                ></i>
                            </span>
                            <p className="title ">Humidity</p>
                        </div>
                        <h3  >{pros.humidity} %</h3>
                    </div>        
                                <div className="card card-item" style={{backgroundColor:"rgb(234 230 230 / 8%)"}}>
                        <div className="d-flex ">
                            <span
                                className="circle-white d-flex justify-content-center align-items-center me-2"
                                
                            >
                                <i
                                    className="bi bi-wind"
                                    style={{ fontSize: "10px", color: "white" }}
                                ></i>
                            </span>
                            <p className="title ">Wind</p>
                        </div>
                        <h3  >{(pros.wind * 3.6).toFixed(1)} km/h</h3>
                    </div>        
                </div>



            </div>
            <div className="box1 d-flex ">
                <div className="card-dia  m-2">
                    <div className="d-flex ">
                        <span
                            className="circle-white d-flex justify-content-center align-items-center me-2"
                            style={{ width: "25px", height: "25px", borderRadius: "50%", backgroundColor: "rgba(57, 91, 215, 0.93)", }}
                        >
                            <i
                                className="bi bi-eye"
                                style={{ fontSize: "15px", color: "white" }}
                            ></i>
                        </span>
                        <span >Visibility</span>
                    </div>
                    <h3>{(pros.visibility / 1000).toFixed(1)} km</h3>
                </div>
                <div className="card-dia  m-2">
                    <div className="d-flex ">
                        <span
                            className="circle-white d-flex justify-content-center align-items-center me-2"
                            style={{ width: "25px", height: "25px", borderRadius: "50%", backgroundColor: "rgba(57, 91, 215, 0.93)", }}
                        >
                            <i
                                className="bi bi-speedometer2"
                                style={{ fontSize: "15px", color: "white" }}
                            ></i>
                        </span>
                        <span className="title mx-1">Pressure</span>
                    </div>
                    <h3>{pros.pressure} hPa</h3>
                </div>
                <div className="card-dia m-2">
                    <div className="d-flex ">
                        <span
                            className="circle-white d-flex justify-content-center align-items-center me-2"
                            style={{ width: "25px", height: "25px", borderRadius: "50%", backgroundColor: "rgba(57, 91, 215, 0.93)", }}
                        >
                            <i
                                className="bi bi-thermometer-half"
                                style={{ fontSize: "15px", color: "white" }}
                            ></i>
                        </span>
                        <span className="title mx-1">Feels Like</span>
                    </div>
                    <h3>{pros.feelsLike} °F</h3>
                </div>
            </div>
            <div className="box1 d-flex ">

                <div className="card-dia mx-2">
                    <div className="d-flex ">
                        <span
                            className="circle-white d-flex justify-content-center align-items-center me-2"
                            style={{ width: "25px", height: "25px", borderRadius: "50%", backgroundColor: "rgba(57, 91, 215, 0.93)", }}
                        >
                            <i
                                className="bi bi-droplet-half"
                                style={{ fontSize: "15px", color: "white" }}
                            ></i>
                        </span>
                        <span className="title mx-1">Humidity</span>
                    </div>
                    <h3>{pros.humidity} %</h3>
                </div>
                <div className="card-dia  mx-2">
                    <div className="d-flex ">
                        <span
                            className="circle-white d-flex justify-content-center align-items-center me-2"
                            style={{ width: "25px", height: "25px", borderRadius: "50%", backgroundColor: "rgba(57, 91, 215, 0.93)", }}
                        >
                            <i
                                className="bi bi-wind"
                                style={{ fontSize: "15px", color: "white" }}
                            ></i>
                        </span>
                        <span className="title mx-1">Wind</span>
                    </div>
                    <h3>{(pros.wind * 3.6).toFixed(1)} km/h</h3>
                </div>
                <div className="card-dia-non  mx-2">

                </div>
            </div>
            <div className="card-container">
                <div className="card sunrise">
                    <div className="d-flex ">
                        <span
                            className="circle-white d-flex justify-content-center align-items-center me-2"
                            style={{ width: "25px", height: "25px", borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.37)", }}
                        >
                            <i
                                className="bi bi-sunrise"
                                style={{ fontSize: "15px", color: "white" }}
                            ></i>
                        </span>
                        <p className="title mx-1">Sunrise</p>
                    </div>
                    <h3>{pros.sunrise}</h3>
                </div>

                <div class="card sunset">
                    <div className="d-flex ">
                        <span
                            className="circle-white d-flex justify-content-center align-items-center me-2"
                            style={{ width: "25px", height: "25px", borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.37)", }}
                        >
                            <i
                                className="bi bi-sunset"
                                style={{ fontSize: "15px", color: "white" }}
                            ></i>
                        </span>
                        <p className="title mx-1">Sunset</p>
                    </div>
                    <h3>{pros.sunset}</h3>
                </div>
            </div>
        </div>

    )
}
