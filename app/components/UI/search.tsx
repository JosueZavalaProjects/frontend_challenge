import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./container";
import { IconContainer } from "./Icon/iconContainer";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SeachInput = () => {
  return (
    <Container>
      <div className="flex items-center gap-2 px-2 text-mainGray">
        <IconContainer classNames="w-4 justify-items-center items-center grid ">
          <FontAwesomeIcon icon={faSearch} />
        </IconContainer>
        <input
          className="text-white bg-inherit outline-none w-72"
          type="text"
          placeholder="Type / to search"
        />
        <div className="flex h-[24px] border-l border-mainGray pl-2 text-2xl items-center">
          &gt;_
        </div>
      </div>
    </Container>
  );
};
