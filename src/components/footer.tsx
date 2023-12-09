import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation('common');

  const changeLanguage = (selectedLanguage: string) => {
      i18n.changeLanguage(selectedLanguage);
  }

  return (
    <div id="footer">
      <div className="container text-center">
        <p>
          &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
          <a href="http://www.templatewire.com" rel="nofollow">
            TemplateWire
          </a>
        </p>
      </div>
    </div>
  );
};

