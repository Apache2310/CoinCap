import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <section>
            <div className="HeadInfo">
                <div className="stat-item">
                    <span>Market Cap</span>
                    <span>$1.66T</span>
                </div>
                <div className="stat-item">
                    <span>Exchange Volume</span>
                    <span>$42.46B</span>
                </div>
                <div className="stat-item">
                    <span>Assets</span>
                    <span>2296</span>
                </div>
                <div className="stat-item">
                    <span>Exchanges</span>
                    <span>73</span>
                </div>
                <div className="stat-item">
                    <span>Markets</span>
                    <span>9,095</span>
                </div>
                <div className="stat-item">
                    <span>Bit Dom Index</span>
                    <span>51.3%</span>
                </div>
            </div>
        </section>
    );
};

export default Header;
