import "./contactus.css";


export function ContactUsPage() {


    return (
        <div className="contact-container container-fluid py-5">
            <div className="contact-card mx-auto p-4">
                <h2 className="contact-title text-center mb-4">Contact Me</h2>
                <p className="contact-text text-center mb-4">
                    Feel free to reach out for collaboration, queries, or project discussions.
                </p>

                <div className="contact-details mb-4">
                    <p><strong>Name:</strong> Pravanjan Amanta</p>
                    <p><strong>Email:</strong> <a href="mailto:pravanjanamanta@gmail.com">pravanjanamanta@gmail.com</a></p>
                    <p><strong>Location:</strong> Angul, Odisha, India</p>
                </div>

                <h3 className="contact-subtitle">Connect with me</h3>
                <div className="contact-links d-flex gap-3 flex-wrap">
                    <a href="https://www.linkedin.com/in/pravanjan-17p" target="_blank" rel="noopener noreferrer">
                        <span className="bi bi-linkedin contact-icon"></span> LinkedIn
                    </a>
                    <a href="https://github.com/pravanjanamanta" target="_blank" rel="noopener noreferrer">
                        <span className="bi bi-github contact-icon"></span> GitHub
                    </a>
                    <a href="https://www.instagram.com/debugwithkanha" target="_blank" rel="noopener noreferrer">
                        <span className="bi bi-instagram contact-icon"></span> Instagram
                    </a>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "15px" }}>
                    <a href="https://pravanjanamanta.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-success">
                            <img src="portofolio.png" alt="portfolio" style={{ height: "25px", width: "25px", marginRight: "8px" }} />
                            Go to Portfolio
                        </button>
                    </a>
                </div>


            </div>
        </div>
    );
}