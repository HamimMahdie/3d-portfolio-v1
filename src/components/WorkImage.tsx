import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  return (
    <div className="work-image">
      {props.link ? (
        <a
          className="work-image-in"
          href={props.link}
          target="_blank"
          rel="noreferrer"
          data-cursor={"disable"}
        >
          <div className="work-link">
            <MdArrowOutward />
          </div>
          <img src={props.image} alt={props.alt} />
        </a>
      ) : (
        <div className="work-image-in">
          <img src={props.image} alt={props.alt} />
        </div>
      )}
    </div>
  );
};

export default WorkImage;
