import "./style.css";
import HeaderStart from "../../fragments/headerStart";
import HeaderCenter from "../../fragments/headerCenter";
import HeaderEnd from "../../fragments/headerEnd";

export default function Header() {
    return(
        <div>
            <div id="header">
                <HeaderStart/>
                <HeaderCenter/>
                <HeaderEnd/>
            </div>
        </div>
    );
}