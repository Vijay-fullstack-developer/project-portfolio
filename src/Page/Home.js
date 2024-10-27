import React, { useState } from 'react';

export default function Home(props) {
    // State for form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // State for error checking
    const [errors, setErrors] = useState({ name: false, email: false, message: false, invalidEmail: false });

    // Set the initial active header to "home"
    const [activeHeader, setActiveHeader] = useState("home");

    // Validate and handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = { name: false, email: false, message: false, invalidEmail: false };

        // Check if the fields are empty
        if (name === "") formErrors.name = true;
        if (email === "") {
            formErrors.email = true;
        } else if (!email.endsWith("@gmail.com")) {
            formErrors.invalidEmail = true;
        }
        if (message === "") formErrors.message = true;

        setErrors(formErrors);

        if (!formErrors.name && !formErrors.email && !formErrors.message && !formErrors.invalidEmail) {
            alert("Form submitted successfully!");
            window.location.reload();
        }
    };

    // Define color for active headers
    const activeColor = "rgba(56, 143, 230, 0.8)";

    // Function to set active header
    const handleHeaderClick = (header) => {
        setActiveHeader(header);
    };


    return (
        <>
            <header className="sticky-header">
                <div className="headers">
                    <div className="container-layout">
                        <div className="portfolio-head">
                            <h1>PortFolio</h1>
                        </div>
                        <div className="master-head">
                            <ul className="list-item">
                                <li className="text-color">
                                    <a
                                        className="active"
                                        href="#home-section"
                                        style={{
                                            color: activeHeader === "home" ? activeColor : "",
                                        }}
                                        onClick={() => handleHeaderClick("home")}
                                    >
                                        <i
                                            className="fa-solid fa-house"
                                            style={{
                                                color: activeHeader === "home" ? activeColor : "",
                                            }}
                                        ></i>
                                        HOME
                                    </a>
                                </li>
                                <li className="text-color">
                                    <a
                                        className="active"
                                        href="#About-section"
                                        style={{
                                            color: activeHeader === "about" ? activeColor : "",
                                        }}
                                        onClick={() => handleHeaderClick("about")}
                                    >
                                        <i
                                            className="fa-solid fa-address-card"
                                            style={{
                                                color: activeHeader === "about" ? activeColor : "",
                                            }}
                                        ></i>
                                        ABOUT
                                    </a>
                                </li>
                                <li className="text-color">
                                    <a
                                        className="active"
                                        href="#Resume-section"
                                        style={{
                                            color: activeHeader === "resume" ? activeColor : "",
                                        }}
                                        onClick={() => handleHeaderClick("resume")}
                                    >
                                        <i
                                            className="fa-solid fa-list-check"
                                            style={{
                                                color: activeHeader === "resume" ? activeColor : "",
                                            }}
                                        ></i>
                                        RESUME
                                    </a>
                                </li>
                                <li className="dropdown text-color">
                                    <a
                                        className="active"
                                        href="#Project-section"
                                        style={{
                                            color: activeHeader === "project" ? activeColor : "",
                                        }}
                                        onClick={() => handleHeaderClick("project")}
                                    >
                                        <i
                                            className="fa-solid fa-briefcase"
                                            style={{
                                                color: activeHeader === "project" ? activeColor : "",
                                            }}
                                        ></i>
                                        PROJECT
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="text-bold"
                                                href="https://vijay-fullstack-developer.github.io/seo-master/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                SEO Master
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-bold"
                                                href="https://vijay-fullstack-developer.github.io/car-application/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Car Application
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="text-color">
                                    <a
                                        className="active"
                                        href="#Contact-section"
                                        style={{
                                            color: activeHeader === "contact" ? activeColor : "",
                                        }}
                                        onClick={() => handleHeaderClick("contact")}
                                    >
                                        <i
                                            className="fa-solid fa-address-book"
                                            style={{
                                                color: activeHeader === "contact" ? activeColor : "",
                                            }}
                                        ></i>
                                        CONTACT
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>


            <div className="home-page" id='home-section'>

                <div className="main-image">
                    <div className="hero-image">
                        <img className="img-tag" src="./Assert/Images/home-bg.jpg" alt="hero image" />
                    </div>
                    <div className="user-data">
                        <div className="input-data">
                            <h1 className="user-data-id">VIJAY <span className="second-name">SATHIYA</span></h1>
                            <p className="user-role-data">Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="about-page" id='About-section'>
                <div className="section-content">
                    <h1>About</h1>
                    <h1><i class="fa-regular fa-address-card"></i></h1>
                </div>
                <div className="sub-page">
                    <div className="user-role">
                        <div className="content-data"><h1>Web Developer</h1>
                        </div>
                        <ul className="list-point">
                            <li className="points"><p>Build and maintain user-friendly, responsive web applications using front-end technologies and frameworks.</p></li>
                            <li className="points"><p>Develop and manage server-side components and databases to ensure seamless functionality and integration</p></li>
                            <li className="points"><p><span className="title-bold">E-commerce focus:</span> Experienced in developing e-commerce platforms with a focus on UI/UX, API integration, and performance optimization.</p></li>
                            <li className="points"><p><span className="title-bold">SEO skills:</span> Skilled in optimizing websites for SEO to improve visibility and drive organic traffic.</p></li>
                            <li className="points"><p><span className="title-bold">Goal-oriented:</span> Looking to contribute to a fast-paced development team, creating user-friendly and visually appealing web applications.</p></li>


                        </ul>

                        <div className="signature">
                            <img src="./Assert/Images/signature-white.png" alt="signature" />
                        </div>
                    </div>
                    <div className="bio-data">
                        <h1>Personal Information</h1>
                        <ul className="personal-data">
                            <li><span className="bio-datas">Name</span> : Vijay</li>
                            <li><span className="bio-datas">Age</span> : 26 Years</li>
                            <li><span className="bio-datas">Residence</span> : Chennai, India </li>
                            <li><span className="bio-datas">Address</span> : No:2/95 sadhasiva nagar</li>
                            <li><span className="bio-datas">Email</span> : vijays17111997@gmail.com</li>
                            <li><span className="bio-datas">Phone</span> : 9344013661</li>
                            <li id="unique-data">
                                <a className="download-resume" href="./Assert/Images/vijaysathiya.pdf" target="_blank" >
                                    Download resume
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>


            <div className="resume-data" id='Resume-section'>
                <div className="sub-head">
                    <div className="resume-header">
                        <h1>Resume </h1>
                        <h1><i class="fa-solid fa-user colour-dky"></i></h1>
                    </div>
                </div>
                <div className="user-experence">
                    <div className="exp-key-data">
                        <div className="sub-design">
                            <div className="exp-data">
                                <h1>Experience</h1>
                            </div>
                            <div className="sub-exper">
                                <h5 className="design-one"><i class="fa-solid fa-square"></i>2024</h5>
                                <div className="fas-border">
                                    <div className="web-layout">
                                        <h3>Web develover</h3>
                                        <span className="company-name">Wissend Consultancy Services Pvt Ltd, chennai, India</span>
                                        <p>Developed dynamic interfaces for large-scale e-commerce platforms using HTML, CSS, JavaScript, and Python.</p>
                                        <p>Collaborated with the web development team to design and implement user-friendly interfaces for client websites.</p>
                                        <p>Utilized Python for data extraction, analysis, and automation, improving workflow efficiency and accuracy.</p>
                                    </div>
                                </div>
                                <h5 className="design-one"><i class="fa-solid fa-square"></i> 2022</h5>
                            </div>
                        </div>
                        <div className="code-skill">
                            <div className="code-skill-spect">
                                <h1 className="head-data-structure">Code Skill</h1>
                            </div>
                            <ul className="key-skill">
                                <li>Html</li>
                                <li>Css</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Python</li>
                                <li>Bootstrap</li>
                                <li>Sql</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sub-exper">
                        <h5 className="design-one"><i class="fa-solid fa-square"></i> 2022</h5>
                        <div className="fas-border">
                            <div className="web-layout">
                                <h3>senior process associate</h3>
                                <span className="company-name">Prodapt Solutions Pvt Ltd, chennai, India</span>
                                <p>Configured servers, routers, and switches for LAN and resolved user issues via voice, email, and web requests.</p>
                                <p>Monitored and managed the ticketing system, troubleshooting incidents and assigning tickets to appropriate teams.</p>
                                <p>Executed automation scripts, provisioned routes, and deployed network services for broadband customers using Huawei routers.</p>
                            </div>
                        </div>
                        <h5 className="design-one"><i class="fa-solid fa-square"></i> 2019</h5>
                    </div>

                </div>
                <div className="user-experence">
                    <div className="exp-key-data">
                        <div className="sub-designs">
                            <div className="exp-data">
                                <h1>Personal Project </h1>
                            </div>
                            <div className="sub-exper">
                                <h5 className="design-one"><i class="fa-solid fa-square"></i>2024</h5>
                                <div className="fas-border">
                                    <div className="web-layout">
                                        <h3>Lenovo Product Page Automation</h3>
                                        <span className="company-name">Wissend Consultancy Services Pvt Ltd, chennai, India</span>
                                        <p><span className="style-data">Python web scraping:</span> Read an Excel sheet containing SKU and country information using Pandas to efficiently process input data.</p>
                                        <p>Generate Lenovo product URLs based on SKU and country, and scrape product titles and descriptions from Lenovo's website using Python web scraping tools.</p>
                                        <p>Use a translation file to map English product titles to translated versions, ensuring localization through automated matching.</p>
                                        <p>Incorporate translations into the final dataset, integrating both original and translated titles along with other product details.</p>
                                        <p>Export the complete dataset into an Excel file, ensuring accuracy and consistency, powered by Pandas, to automate reporting and eliminate manual efforts.</p>
                                    </div>
                                </div>
                                <h5 className="design-one"><i class="fa-solid fa-square"></i> 2024</h5>
                            </div>
                        </div>
                        <div className="code-skill">
                            <div className="code-skill-spect">
                                <h1 className="head-data-structure">Tools</h1>
                            </div>
                            <ul className="key-skill">
                                <li>Service Desk</li>
                                <li>JIRA</li>
                                <li>HMC</li>
                                <li>Pycharm</li>
                                <li>Flash</li>
                                <li>Liberate</li>
                                <li>Uipath</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sub-exper">
                        <h5 className="design-one"><i class="fa-solid fa-square"></i> 2024</h5>
                        <div className="fas-border">
                            <div className="web-layout">
                                <h3>React Portfolio Showcase</h3>
                                <span className="company-name">Wissend Consultancy Services Pvt Ltd, chennai, India</span>
                                <p><span className="style-data">React:</span> Dynamic and interactive portfolio website built with React.</p>
                                <p><span className="style-data">Responsive Design:</span> Utilized HTML, CSS, and Bootstrap for responsive layouts.</p>
                                <p><span className="style-data">JavaScript Interactivity:</span> Enhanced functionality and user experience with JavaScript.</p>
                                <p><span className="style-data">UI/UX:</span> Styled and designed user interfaces integrated into React applications.</p>
                                <p><span className="style-data">Project Showcase:</span> Highlighted multiple web development projects, emphasizing design and implementation.</p>
                            </div>
                        </div>
                        <h5 className="design-one"><i class="fa-solid fa-square"></i> 2024</h5>
                    </div>
                </div>
            </div>






            <div className="contact-me" id='Contact-section'>
                <div className="sub-head">
                    <div className="resume-header">
                        <h1>Contact Me </h1>
                        <h1><i className="fa-solid fa-id-card"></i></h1>
                    </div>
                </div>
                <div className="contact-text">
                    <div className="cont-text-input">
                        <h1>Let's Talk</h1>
                    </div>
                    <div className="input-data">
                        <div className="input-user-data">
                            <div className="input-name">
                                <input
                                    id="input-name"
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ border: errors.name ? "2px solid red" : "2px solid #ccc" }}
                                />
                            </div>
                            <div className="input-email">
                                <input
                                    id="input-email"
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ border: errors.email || errors.invalidEmail ? "2px solid red" : "2px solid #ccc" }}
                                />
                                {errors.invalidEmail && (
                                    <p style={{ color: "red" }}></p>
                                )}
                            </div>
                        </div>
                        <div className="text-area">
                            <textarea
                                id="text-data"
                                placeholder=" How can we help you? "
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                style={{ border: errors.message ? "2px solid red" : "2px solid #ccc" }}
                            />
                        </div>
                        <div className="submit-btn">
                            <button type="submit" onClick={handleSubmit}>Send message</button>
                        </div>
                    </div>
                </div>
                <div className="contact-location">
                    <div className="contact-data">
                        <i className="fa-solid fa-envelope"></i>
                        <div className="mail-text">
                            <p><a href="mailto:example@example.com">vijays@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="contact-data">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="mail-text">
                            <p>chennai, India</p>
                        </div>
                    </div>
                    <div className="contact-data">
                        <i className="fa-solid fa-phone"></i>
                        <div className="mail-text">
                            <p>(+91) 9344013661</p>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}