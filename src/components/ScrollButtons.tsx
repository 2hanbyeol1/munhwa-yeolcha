import Image from "next/image";

const ScrollButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="z-50 fixed bottom-4 right-4 flex flex-col gap-2">
      <button className="p-2 bg-green rounded-full hover:animate-up" onClick={scrollToTop}>
        <Image width={20} height={20} src="/icons/top.png" alt="스크롤 탑" />
      </button>
      <button className="p-2 bg-green rounded-full hover:animate-down" onClick={scrollToBottom}>
        <Image width={20} height={20} src="/icons/bottom.png" alt="스크롤 바텀" />
      </button>
    </div>
  );
};

export default ScrollButtons;
