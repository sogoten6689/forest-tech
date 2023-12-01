import { GalleryItemType } from "../data/DataType";

export const Image = (props: GalleryItemType) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={props.largeImage} title={props.title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{props.title}</h4>
          </div>
          <img src={props.smallImage} className="img-responsive" alt={props.title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
