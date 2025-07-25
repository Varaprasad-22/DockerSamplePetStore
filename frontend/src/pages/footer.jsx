import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.css"
function Footer() {
    return (
        <div className="footer_container">
            <div className="left">
                    <h2>ABOUT US</h2>
                    <ul>
                        <li>Our Story</li>
                        <li>Affiliated Programs</li>
                        <li>Careers</li>
                    </ul>
                
            </div>
            <div className="customer">
                    <h2>CUSTOMER SERVICE</h2>
                    <ul>
                        <li>Returns & Exchange</li>
                        <li>Shipping & Delivery</li>
                        <li>Track Your Order</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            {/* <div className="center"></div> */}
            <hr/>
            <div className="right">
                <h2>CONNECT WITH US</h2>
                <div className="social_icons">
                <FaFacebook className="facebook_icon" />
                <FaTwitter className="twitter_icon" />
                <FaInstagram className="instagram_icon" />
                </div>
                <p>© 2025 Pet Store. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer;