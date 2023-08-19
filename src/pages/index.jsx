export default function Home() {
  // do responsive stuff
  return (
    // Container
    <div className="h-screen bg-[#699BF7]">
      <div className="flex flex-row h-screen gap-[88px] justify-space-around">
        {/* Image */}
        <div className="flex flex-col justify-center">
          <img className="w-[673px]" src="/images/landing.png" alt="" />
        </div>
        {/* Welcome Text */}
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[96px] w-[469px] mt-[70px] text-white leading-[102px]">
            welcome to{" "}
            <span className="italic relative inline-block pb-[2px]">
              ALLY
              <span className="absolute inset-x-0 bottom-0 h-[5px] bg-current"></span>
            </span>
          </p>
          <a href="/api/auth/login">
            <button className="w-[481px] h-[60px] bg-white rounded-[8px] text-[24px] font-bold text-[#699BF7] mt-[58px]">
              LETS SIGN IN
            </button>
          </a>
          <p className="w-[333px] mt-[48px] text-white text-opacity-50 text-[36px] font-bold leading-[48px]">
            create your ally in 3 steps.
          </p>
        </div>
      </div>
    </div>

    // <div className="h-screen bg-[#699BF7]">
    //   <div className="flex flex-col h-screen justify-center">
    //     <div style={{ width: "60%", margin: "0 auto" }}>
    //       <img src="/images/landing.png" alt="" />{" "}
    //     </div>
    //     <div className="flex flex-col justify-center p-10 items-center gap-[20px]">
    //       <p className="font-bold text-[64px] text-white text-center">
    //         welcome to{" "}
    //         <span>
    //           ALLY{" "}
    //           {/* <span className="absolute inset-x-0 bottom-0 bg-current"></span> */}
    //         </span>
    //       </p>
    //       <a href="/api/auth/login">
    //         <button className="bg-white h-[60px] rounded-[8px] text-[24px]font-bold text-[#699BF7] p-5">
    //           LETS SIGN IN
    //         </button>
    //       </a>
    //       <p className="w-[333px] mt-[48px] text-white text-opacity-50 text-[36px] font-bold leading-[48px]">
    //         create your ally in 3 steps.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
