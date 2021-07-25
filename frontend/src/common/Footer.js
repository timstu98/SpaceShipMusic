import './Footer.css';
import temp_social from "../static/images/temp_social.jpeg"

const Footer = (props) => {
    return (
      <footer>
        <div className="logo_footer"> 
        <img
        src="https://www.logaster.com/blog/wp-content/uploads/2018/05/LogoMakr.png"
        alt="LOGO HERE"/> 
        </div>

      <div className="footer_right">
      
        <div className="socials">
          <div className="social_button"><img src={temp_social} alt="social button"/></div>
          <div className="social_button"><img src={temp_social} alt="social button"/></div>
          <div className="social_button"><img src={temp_social} alt="social button"/></div>
          <div className="social_button"><img src={temp_social} alt="social button"/></div>
        </div>

        <div className="signature">
          <p> This site was designed by <b>Tim Stuart</b>.</p>
        </div>
        
      </div>

      </footer>
    )
}

export default Footer
