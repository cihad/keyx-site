import clsx from "clsx";
import "./slot.scss";

export default function Slot(props) {
  const { slotIdentifier = "children", className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element className={clsx("slot_146_48", className)} {...rest}>
      <div className="frame58_146_49">
        <div className="children_146_50">{slotIdentifier}</div>
      </div>
    </Element>
  );
}
