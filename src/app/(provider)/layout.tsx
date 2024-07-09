import Header from "@/components/Header";
import Providers from "@/components/Providers";

interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType) => {
  return (
    <Providers>
      <Header />
      <div className="bg-beige min-h-screen pt-14">
        <div className="mx-auto max-w-[1024px] px-3">{children}</div>
      </div>
    </Providers>
  );
};

export default Layout;
