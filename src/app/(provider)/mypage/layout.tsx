import TicketList from "@/components/TicketList";

interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType) => {
  return (
    <div className="flex justify-center items-center h-[600px] w-[100%]">
      <div className="grid grid-cols-2">
        <TicketList />
        <div className="w-[600px]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
