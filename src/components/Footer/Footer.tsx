import "./Footer.css";
import socialX from "../../assets/icons/social-x.svg";
import socialWhatsapp from "../../assets/icons/social-whatsapp.svg";
import socialInstagram from "../../assets/icons/social-instagram.svg";

const socials = [
  { label: "X", href: "#", icon: socialX },
  { label: "WhatsApp", href: "#", icon: socialWhatsapp },
  { label: "Instagram", href: "#", icon: socialInstagram },
];

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">© 2026 Plantified, Grown with care.</p>

      <div className="footer-socials">
        {socials.map((social) => (
          <a
            className="footer-social"
            href={social.href}
            key={social.label}
            aria-label={social.label}
          >
            <img src={social.icon} alt="" aria-hidden="true" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
