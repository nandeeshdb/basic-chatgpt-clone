import ChatComponents from "./components/chat";

export default function MainPage() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-start p-3">
      <div className="bg-slate-800 p-3 w-[800px] rounded-lg text-white">
        <h1 className="text-2xl">Open ai</h1>
        <ChatComponents />
      </div>
    </div>
  );
}
