const Home = () => {
  return (
    <div className="flex h-screen h-[calc(100vh-5rem)] justify-center items-center flex-col w-full">
      <div className="w-full h-screen bg-main bg-cover bg-center">
        <div
          className="w-full h-full flex  justify-center items-center 
             bg-gray-500/40 backdrop-brightness-95"
        >
          <span className="text-white text-4xl w-full text-center flex flex-row justify-between h-full">
            <div className="border w-1/3 h-full">1</div>
            <div className="border w-1/3 h-full">2</div>
            <div className="border w-1/3 h-full">3</div>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Home;
