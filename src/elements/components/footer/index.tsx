import "./style.css";
import FooterStart from "../../fragments/footerStart";
import FooterLeft from "../../fragments/footerLeft";
import FooterRight from "../../fragments/footerRight";
import FooterEnd from "../../fragments/footerEnd";

export default function Footer() {
    return(
        <div id="final-footer">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} id="container">
                <FooterStart/>
                <FooterLeft/>
                <FooterRight/>
                <FooterEnd/>
            </div>
            <div id="line"></div>
            <div id="rights">
                <div>2024 furnino. All rights reserved</div>
            </div>
        </div>
    );
}