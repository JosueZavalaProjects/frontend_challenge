/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { Container } from "../container";

type IconProps = {
  src: any;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  
};
export const Icon = (props: IconProps) => {
  return (
    <Container>
      <figure className="flex px-1 w-8 h-8 items-center">
        <Image className="" {...props} />
      </figure>
    </Container>
  );
};
