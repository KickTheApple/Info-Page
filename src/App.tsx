import "./App.css"

export default function App() {
    return (
        <>
            <div id={"container"}>
                <div id={"introducer"}>
                    <div id={"name"}>
                        <p id={"myName"}>My name is</p>
                        <h1 id={"fullName"}>DOMENIC DVOJMOČ</h1>
                        <ul id={"connections"}>
                            <a href={"https://github.com/KickTheApple"}>Github</a>
                            <a href={"https://domenic.dvojmoc@gmail.com"}>Email</a>
                            <a href={"https://si.linkedin.com/in/domenic-dvojmo%C4%8D-2863a5380"}>LinkedIn</a>
                        </ul>
                    </div>
                </div>
                <div id={"aspects"}>
                    <p id={"workedOn"}>I've worked on the following Projects:</p>
                    <div id={"projects"}>
                        <div id={"proj"}><a href={"https://github.com/KickTheApple/SSHKotlic"}>SSHKotlic</a><p>A High interaction SSH Honeypot with keylogging and persistance combined with a singular data collection point for visualization</p></div>
                    </div>
                    <div id={"projects"}>
                        <div id={"proj"}><a href={"https://github.com/KickTheApple/Slordle"}>Slordle</a><p>A Simple word game developed for React framework learning</p></div>
                    </div>
                    <div id={"projects"}>
                        <div id={"proj"}><a href={"https://github.com/KickTheApple/SSHPotica"}>SSHPotica</a><p>A high interaction honeypot utilizing Docker containers written in C</p></div>
                    </div>
                    <div id={"projects"}>
                        <div id={"proj"}><a href={"https://github.com/KickTheApple/CompilerPINS"}>CompilerPINS</a><p>A compiler written in Java for an imaginary programming language called PINS</p></div>
                    </div>
                    <div id={"projects"}>
                        <div id={"proj"}><a href={"https://github.com/KickTheApple/STM-Mini-Games"}>STM32-Games</a><p>A collection of small games written for the STM32 Embedded system using C with HAL</p></div>
                    </div>
                    <div id={"projects"}>
                        <div id={"proj"}><a href={"https://github.com/KickTheApple/Sorting-Algorithms-in-Java"}>Sorting-Algorithms-in-Java</a><p>A project comrpised of many different sorting algorithms.</p></div>
                    </div>
                    <div id={"projects"}>
                        <div id={"proj"}><a href={"https://github.com/KickTheApple/2D-Matrix-Displayer"}>2D-Matrix-Displayer</a><p>A simple html website for reading json files and drawing using them.</p></div>
                    </div>
                </div>

            </div>
        </>
    );
}