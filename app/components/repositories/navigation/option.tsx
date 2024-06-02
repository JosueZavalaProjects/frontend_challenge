import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconContainer } from "../../UI/Icon/iconContainer";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type OptionProps = {
  image: IconDefinition;
  option: string;
};
export const Option = ({ image, option }: OptionProps) => {
  return (
    <li className="flex gap-2 mb-2 p-1 cursor-pointer text-mainGray hover:text-white hover:bg-slate-800 ">
      <IconContainer classNames="grid justify-items-center items-center w-6 p-1">
        <FontAwesomeIcon icon={image} />
      </IconContainer>
      <span className="text-white">{option}</span>
    </li>
  );
};
