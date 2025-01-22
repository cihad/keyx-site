import Link from "next/link";
import clsx from "clsx";
import "./card.scss";

export default function Card(props) {
  const { title = "Resource Name", className, ...rest } = props;

  const Element = props.as || Link;

  return (
    <Element className={clsx("card_92_8", className)} {...rest}>
      <div className="image_92_5"></div>

      <div className="frame1_92_6">
        <div className="resourceName_92_7">{title}</div>
      </div>
    </Element>
  );
}
