type ContainerProps = {
  children: React.ReactNode;
};
export const Container = ({ children }: ContainerProps) => {
  return <div className="border border-gray-400 p-1">{children}</div>;
};
