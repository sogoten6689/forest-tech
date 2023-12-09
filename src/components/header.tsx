import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation(['common', 'header']);

  const changeLanguage = (selectedLanguage: string) => {
      i18n.changeLanguage(selectedLanguage);
  }

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
          <a className="navbar-brand page-scroll" style={{display: "flex"}} href="/">
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
              <a href="/#features" className="page-scroll">
                {t('header:features')}
              </a>
            </li>
            <li>
              <a href="/#about" className="page-scroll">
                {t('header:about')}
              </a>
            </li>
            <li>
              <a href="/#services" className="page-scroll">
                {t('header:services')}
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="page-scroll">
                {t('header:gallery')}
              </a>
            </li>
            <li>
              <a href="/#testimonials" className="page-scroll">
                {t('header:testimonials')}
              </a>
            </li>
            <li>
              <a href="/#team" className="page-scroll">
                {t('header:team')}
              </a>
            </li>
            <li>
              <a href="/#contact" className="page-scroll">
                {t('header:contact')}
              </a>
            </li>
            <li>
              <a href="#language" className="page-scroll">
                <div  data-toggle="dropdown">
                {t('common:current_lang')}
                <span className="caret"></span></div>
                <ul className="dropdown-menu">
                  <li><span style={{margin: 10}} onClick={() => {changeLanguage('en')}}>English</span></li>
                  <li><span style={{margin: 10}} onClick={() => {changeLanguage('vi')}}>Tiếng Việt</span></li>
                </ul>

              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

