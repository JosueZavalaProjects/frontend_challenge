export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex w-auto border-2 border-[#30363d] p-1 rounded-md">
      {children}
    </div>
  );
};
