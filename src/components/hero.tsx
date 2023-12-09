import { useTranslation } from "react-i18next";
import { HeaderType } from "../data/DataType";

export interface AboutProps  {
  data?: HeaderType
}

export const Hero = (props: AboutProps) => {
  const { t } = useTranslation(['home']);

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {t('home:learn_more')}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
