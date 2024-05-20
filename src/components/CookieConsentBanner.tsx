import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(!Cookies.get("cookie-consent"));

  const handleAccept = () => {
    Cookies.set("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set("cookie-consent", "declined");
    setIsVisible(false);
  };

  useEffect(() => {
    const cookieConsent = Cookies.get("cookie-consent");

    if (cookieConsent === "accepted") alert("Cookie is accepted");
    if (cookieConsent === "declined") alert("Cookie is declined");
  }, []);

  return isVisible ? (
    <div className="cookie-consent-banner">
      <p>
        Этот сайт использует файлы cookie для улучшения пользовательского опыта.
      </p>
      <button onClick={handleAccept}>Принять</button>
      <button onClick={handleDecline}>Отклонить</button>
    </div>
  ) : null;
};

export default CookieConsentBanner;
