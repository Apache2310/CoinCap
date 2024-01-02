import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <section>
            <div className="HeadInfo">
                <div className="stat-item">
                    <span>Market Cap</span>
                    <span className="stat2">$1.66T</span>
                </div>
                <div className="stat-item">
                    <span>Exchange Volume</span>
                    <span className="stat2">$42.46B</span>
                </div>
                <div className="stat-item">
                    <span>Assets</span>
                    <span className="stat2">2296</span>
                </div>
                <div className="stat-item">
                    <span>Exchanges</span>
                    <span className="stat2">73</span>
                </div>
                <div className="stat-item">
                    <span>Markets</span>
                    <span className="stat2">9,095</span>
                </div>
                <div className="stat-item">
                    <span>Bit Dom Index</span>
                    <span className="stat2">51.3%</span>
                </div>
            </div>
        </section>
    );
};

export default Header;
