import Waves from "./Waves/Waves.tsx";
import {Animator, FadeIn, ScrollContainer, ScrollPage, Zoom} from "react-scroll-motion"
import "./App.css"

export default function App() {
    return (
        <>
            <div id={"container"}>
                <div id={"introducer"}>
                    <div id={"name"}>
                        <p>My name is</p>
                        <h1>DOMENIC DVOJMOČ</h1>
                        <ul>
                            <a href={"https://github.com/"}>Github</a>
                            <a href={"https://Contact.com/"}>Email</a>
                            <a href={"https://Contact.com/"}>LinkedIn</a>
                        </ul>
                    </div>
                </div>
                <div id={"aspects"}>
                    <div id={"projects"}>
                        <p>I've worked on the following Projects:</p>
                    </div>
                </div>

            </div>
        </>
    );
}