import SideBar from "./_components/SideBar";

interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType) => {
  return (
    <div className="grid grid-cols-[10rem_1fr] gap-10">
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
