import Image from "next/image";
import { Container } from "../UI/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  ChevronDown,
  CircleIcon,
  InboxIcon,
  PullRequestIcon,
} from "@/public/images";
import { SeachInput } from "../UI/search";
import { Icon as SVGIcon } from "../UI/Icon/icon";
import { IconContainer } from "../UI/Icon/iconContainer";

export const Header = () => (
  <section className="flex w-full p-4 justify-between">
    <section className="flex gap-4 items-center">
      <Container>
        <IconContainer classNames="grid justify-items-center items-center w-6 p-0.5 text-mainGray">
          <FontAwesomeIcon icon={faBars} />
        </IconContainer>
      </Container>
      <figure className="">
        <IconContainer classNames="w-8 text-white justify-items-center items-center grid ">
          <FontAwesomeIcon icon={faGithub} />
        </IconContainer>
      </figure>
      <div className="grid items-center py-2">
        <span className="text-xl font-semibold">facebook</span>
      </div>
    </section>

    {/* right */}
    <section className="flex gap-4">
      <SeachInput />
      <Container>
        <div className="flex gap-2">
          <IconContainer classNames="justify-items-center items-center grid w-5 pl-1 text-mainGray ">
            <FontAwesomeIcon icon={faPlus} />
          </IconContainer>
          <figure className="flex px-1 w-8 h-8 items-center">
            <Image
              src={ChevronDown}
              alt="chevron down"
              width={25}
              height={25}
            />
          </figure>
        </div>
      </Container>
      <figure className="text-mainGray p-2">
        <span className="text-xl">|</span>
      </figure>
      <SVGIcon src={CircleIcon} alt="circle" width={25} height={25} />
      <SVGIcon
        src={PullRequestIcon}
        alt="pull request"
        width={25}
        height={25}
      />
      <SVGIcon src={InboxIcon} alt="inbox" width={25} height={25} />
    </section>
  </section>
);
