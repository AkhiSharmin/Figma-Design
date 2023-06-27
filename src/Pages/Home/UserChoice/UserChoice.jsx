const UserChoice = () => {
  return (
    <div className="flex bg-[#DDF8F3] p-24 space-x-10">
      <div className="w-2/3">
        <div className="flex bg-[#4E99A4]  p-10 justify-around">
          <img src="https://i.ibb.co/MVXm79B/Rectangle-208.png" alt="" />
          <img src="https://i.ibb.co/bKSv0t3/Rectangle-209.png" alt="" />
        </div>
      </div>
      <div className="w-1/3">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex justify-between items-center bg-white shadow-2xl px-2">
            <img
              className="h-24"
              src="https://i.ibb.co/BTwYDnN/image-149.png"
              alt="l"
            />
            <p className="text-2xl">4.9/5</p>
          </div>
          <div className="flex justify-between items-center bg-white shadow-2xl px-2">
            <img
              className="h-24 w-48"
              src="https://i.ibb.co/K5V2fz1/image-removebg-preview-2022-07-23-T185243-1.png"
              alt="l"
            />
            <p className="text-2xl">4.9/5</p>
          </div>
          <div className="flex justify-between items-center bg-white shadow-2xl px-2">
            <img
              className="h-24 w-48"
              src="https://i.ibb.co/z4xypzk/image-152.png"
              alt="l"
            />
            <p className="text-2xl">4.9/5</p>
          </div>
          <div className="flex justify-between items-center bg-white shadow-2xl px-2">
            <img
              className="h-24"
              src="https://i.ibb.co/gvnjkhd/image-removebg-preview-2022-07-23-T185023-1.png"
              alt="l"
            />
            <p className="text-2xl">4.8/5</p>
          </div>
          <div className="flex justify-between items-center bg-white shadow-2xl px-2">
            <img
              className="h-24"
              src="https://i.ibb.co/0CLS19P/image-151.png"
              alt="l"
            />
            <p className="text-2xl">5.0/5</p>
          </div>
          <div className="flex justify-between items-center bg-white shadow-2xl px-2">
            <img src="https://i.ibb.co/nRfd22b/image-154.png" alt="l" />
            <p className="text-2xl">5.0/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChoice;
