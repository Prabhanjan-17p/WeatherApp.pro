import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import "./hero.css";
import { HomePage } from "./home";
import { AboutPage } from "./about";
import { ContactUsPage } from "./contactus";

export function HeroSection() {
    return (
        <div className="container-fluid mainCls" style={{overflow: "hidden" }}>
            <div className="back-video">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline          
                    controls={false}  
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                >
                    <source src="blackhole.webm" type="video/webm" />
                    <source src="blackhole.mp4" type="video/mp4" /> {/* fallback for mobile Safari */}
                    Your browser does not support the video tag.
                </video>
            </div>

            <BrowserRouter>
                <header className="d-flex justify-content-between align-items-center text-white headerCls p-2 mt-4 nav-bar-mob">
                    <div className="h3">ClimaVista</div>
                    <nav className="d-flex gap-4 nav-span">
                        <span>
                            <NavLink className={({ isActive }) => isActive ? 'nav-item-style active-link' : 'nav-item-style'} to="/"> HOME </NavLink>
                        </span>
                        <span>
                            <NavLink className={({ isActive }) => isActive ? 'nav-item-style active-link' : 'nav-item-style'} to="about"> ABOUT </NavLink>
                        </span>
                        <span>
                            <NavLink className={({ isActive }) => isActive ? 'nav-item-style active-link' : 'nav-item-style'} to="contact"> CONTACT </NavLink>
                        </span>
                    </nav>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="about" element={<AboutPage />}></Route>
                        <Route path="contact" element={<ContactUsPage />}></Route>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    );
}
