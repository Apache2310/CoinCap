import React from "react";
import "./Footer.css"

function Footer() {
    return (
            <div className="footer">
                &copy; {new Date().getFullYear()}
            </div>
    );
};

export default Footer;