import TicketList from "@/components/TicketList";

interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType) => {
  return (
    <div className="flex w-[800px]">
      <div className="grid grid-cols-2">
        <TicketList />
        <div className="w-[600px]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
