import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const { t, i18n } = useTranslation('common');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" style={{display: "flex"}} href="#page-top">
            <img src="./logo.png" alt="Forest Tech" />
            Forest Tech
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <a>
                {/* <label htmlFor="language-select">{t('common:current_lang')}</label> */}
                <select value={selectedLanguage} onChange={handleChange} className="page-scroll">
                  <option value="en">English</option>
                  <option value="vi">Việt Nam</option>
                </select>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

