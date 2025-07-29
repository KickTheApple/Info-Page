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
                            <a href={"https://Contact.com/"}>LinkedIn</a>
                        </ul>
                    </div>
                </div>
                <div id={"aspects"}>
                    <p id={"workedOn"}>I've worked on the following Projects:</p>
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