import Header from "@/components/Header";
import Providers from "@/components/Providers";

interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType) => {
  return (
    <Providers>
      <Header />
      <main className="bg-beige min-h-screen pt-32">
        <div className="mx-auto max-w-[1024px] px-5">{children}</div>
      </main>
    </Providers>
  );
};

export default Layout;
