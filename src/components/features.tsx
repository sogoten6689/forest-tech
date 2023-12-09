
import { useTranslation } from "react-i18next";
import { FeatureType } from "../data/DataType";

export interface FeatureProps  {
  data?: FeatureType[]
}

export const Features = (props: FeatureProps) => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{t('home:features')}</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d: FeatureType, i: number) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : t('common:loading')}
        </div>
      </div>
    </div>
  );
};
