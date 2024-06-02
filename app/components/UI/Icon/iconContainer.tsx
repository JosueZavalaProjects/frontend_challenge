type IconContainerProps = ContainerProps & {
  classNames?: string;
};
export const IconContainer = ({ children, classNames }: IconContainerProps) => {
  return <div className={`${classNames} cursor-pointer`}>{children}</div>;
};
