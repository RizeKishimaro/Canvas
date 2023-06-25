import { useEffect, useRef, useState } from "react";
import cmd from "../../data/cmd-data";

const TerminalCom = () => {
  const [text, setText] = useState(null);
  const terminalref = useRef(null);
  useEffect(() => {
    const terminal_text = terminalref.current;
    terminal_text.focus();
    terminal_text.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        const cmdtext = terminal_text.value;
        switch (cmdtext) {
          case "help":
            setText(cmd[0].content);
            break;
          case "thunderous":
            setText(cmd[1].content);

            break;

          case "contact":
            setText(cmd[2].content);

            break;

          default:
            setText("Invalid command");
            break;
        }
      }
    });
  });
  return (
    <div className=" w-full sm:w-[50%] mx-auto p-3">
      <div className=" bg-black h-[300px] sm:px-10 sm:h-[300px] p-3 ">
        <div className="terminal overflow-hidden">
          <div className=" ">
            <span className=" text-red-600">Thunderous Hackers Team</span>
          </div>
          <div className="terminal__prompt mt-5">
            <div className="terminal__prompt__label">
              thunderous@thunderous.io$~:
            </div>
            <div className="terminal__prompt__input">
              <input type="text" className="" ref={terminalref} />
            </div>
          </div>
        </div>
        <div className=" block h-full ">
          <div className="relative overflow-hidden">
            <p
              className={` text-start terminal-text font-color mt-3 text-yellow-400 text-xs `}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalCom;
