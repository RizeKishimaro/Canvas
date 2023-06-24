import { useEffect, useRef } from "react";

const Terminal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const text = ref.current;
    const textLoad = () => {
      const cmdText = [
        "ipconfig",
        "ifconfig",
        "msfconsole",
        "sqlmap",
        "exfitool",
      ];
      console.log(cmdText[Math.floor(Math.random() * text.length)]);
      text.innerText = cmdText[Math.floor(Math.random() * cmdText.length)];
    };
    setInterval(() => {
      textLoad();
    }, 4000);
  });
  return (
    <div className=" p-5 block relative w-full sm:w-[700px] sm:mx-auto mx-0">
      <div className=" sm:w-full bg-[#242121] h-[50px] rounded-t-lg">
        <ul className=" list-none flex flex-row gap-2 my-auto h-full">
          <li className=" ps-2 py-3">
            <div className=" p-2 bg-yellow-300 w-[2px] rounded-full"></div>
          </li>
          <li className=" py-3">
            <div className=" p-2 bg-yellow-300 w-[2px] rounded-full"></div>
          </li>
          <li className="  py-3">
            <div className=" p-2 bg-yellow-300 w-[2px] rounded-full"></div>
          </li>
        </ul>
        <div className=" bg-[#555353] p-5 h-[300px] rounded-b-lg w-full text-start ">
          <div className="flex flex-row align-middle">
            <div className=" inline-block">
              <span className=" text-[#22b218]">$thunderous:~$ </span>
            </div>
            <div className="relative inline-block overflow-hidden ms-2">
              <span className=" terminal-text " ref={ref}>
                whoami
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
