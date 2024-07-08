import Header from "@/components/Header";
import Providers from "@/components/Providers";

interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType) => {
  return (
    <Providers>
      <Header />
      <div className="mx-auto max-w-[1024px] mt-7 px-3">{children}</div>
    </Providers>
  );
};

export default Layout;
