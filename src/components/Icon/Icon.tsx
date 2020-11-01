import React from "react";
import { FaTimes } from "react-icons/all";
import "./Icon.scss";

export enum IconTypes {
  REMOVE = "REMOVE",
}

type Props = {
  iconType: IconTypes;
  handleClick?: () => void;
};

export const Icon: React.FC<Props> = ({ iconType, handleClick }) => {
  switch (iconType) {
    case IconTypes.REMOVE:
      return <FaTimes onClick={handleClick} className="icon icon--remove" />;
    default:
      return null;
  }
};

Icon.displayName = "Icon";
