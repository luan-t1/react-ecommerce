import "./style.css";

export default function FooterRight() {
    return(
        <div>
            <div id="block">
                <div id="footer-links">
                    <ul>
                        <li className="with-margin"><span>Help</span></li>
                        <li className="margin"><a href="">Payment Options</a></li>
                        <li className="margin"><a href="">Returns</a></li>
                        <li className="margin"><a href="">Privacy Policies</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}