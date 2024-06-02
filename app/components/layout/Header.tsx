import Image from "next/image";
import { Container } from "../UI/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => (
  <section className="flex bg-white w-full  p-4 justify-between">
    <section className="flex gap-4">
      <Container>
        <div className="w-12 text-black">
          <FontAwesomeIcon icon={faBars} size="sm" />
        </div>
      </Container>
      <figure className="bg-gray-400 p-2">
        <span>Github Image</span>
      </figure>
      <figure className="bg-gray-400 p-2">
        <span>Facebook</span>
      </figure>
    </section>
    <section className="flex gap-4">
      <figure className="bg-gray-400 p-2">
        <span>Search bar</span>
      </figure>
      <figure className="bg-gray-400 p-2">
        <span>|</span>
      </figure>
      <figure className="bg-gray-400 p-2">
        <span>1</span>
      </figure>
      <figure className="bg-gray-400 p-2">
        <span>2</span>
      </figure>
      <figure className="bg-gray-400 p-2">
        <span>3</span>
      </figure>
      <figure className="bg-gray-400 p-2">
        <span>4</span>
      </figure>
    </section>
  </section>
);
