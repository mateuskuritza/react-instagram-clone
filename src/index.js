import ReactDOM from "react-dom";

import Top from "./Top";
import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Feed from "./Feed";
import MobileMenu from "./MobileMenu";

function App() {
    return (
        <>
            <Top />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Feed />
                </div>
                <Sidebar />
            </div>
            <MobileMenu />
        </>
    );
}

ReactDOM.render(App(), document.querySelector(".root"));