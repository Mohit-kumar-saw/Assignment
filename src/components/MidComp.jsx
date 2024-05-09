import React from "react";
import Dropdown from "./Dropdown";

const MidComp = () => {
  return (
    <div>
      <div className="flex w-[487px] h-[30px] items-center text-[18px] text-[#696671] ml-[70px] mt-[60px]">
        <img className="w-[20px]" src="/home.png" alt="" />{" "}
        <div className="w-[109px] h-[22px] font-[500] text-[18px]  flex justify-center items-center text-[#696671]">
          <div className=" w-[24px] h-[24px] flex justify-center items-center">
            <img src="/Vector.png" className="w-[7.41px] h-[12px]" alt="" />
          </div>
          <span>Flashcard</span>
        </div>
        <div className="w-[136px] h-[22px] font-[500] text-[18px]  flex justify-center items-center text-[#696671]">
          <div className=" w-[24px] h-[24px] flex justify-center items-center">
            <img src="/Vector.png" className="w-[7.41px] h-[12px]" alt="" />
          </div>
          <span>Mathematics</span>
        </div>
        <div className="w-[212px] h-[22px] font-[600] text-[18px] text-[#06286E] flex justify-center items-center">
          <div className=" w-[24px] h-[24px] flex justify-center items-center">
            <img src="/Vector.png" className="w-[7.41px] h-[12px]" alt="" />
          </div>
          <span>Relation and Function</span>
        </div>
      </div>
      <div className="font-[700] text-[32px] gradient-text ml-[70px] mt-[60px] ">
        {" "}
        Relation and Function (Mathematics )
      </div>

      <div className="mt-11">
        <ul className="flex gap-[60px] justify-center items-center font-[500] text-[20px] text-[#696671] ">
          <li className="text-[#06286E] border-b-2 border-[#06286E]">
            <a href="#">Study</a>
          </li>
          <li>
            <a href="#">Quiz</a>
          </li>
          <li>
            <a href="#">Test</a>
          </li>
          <li>
            <a href="#">Game</a>
          </li>
          <li>
            <a href="#">Others</a>
          </li>
        </ul>

        <div className="flex justify-center items-center flex-col mt-7">
          <div className="  w-[712px] h-[393.19px] rounded-[42.51px] bg-gradient-to-bl from-[#06286E] to-[#164EC0] ">
            <div className="flex justify-between items-center self-center w-[80%] mt-8 ml-16">
              <img src="/lig.png" alt="" />
              <img src="/spe.png" alt="" />
            </div>
            <div className="flex justify-center items-center h-[70%] font-[700] text-[38.26px] text-white ">
              <span>9 + 6 + 7x -2x - 3</span>
            </div>
          </div>
          <div className="flex items-center justify-around w-[712px] mt-7">
            <div>
              {" "}
              <img className="w-[30px] h-[30.2px] " src="/ref.png" alt="" />
            </div>
            <div className=" flex items-center gap-8">
              <img className="w-[60px] h-[60px] " src="/ltbg.png" alt="" />
              <span className="font-[700] text-[24px] text-[#202B37]">
                01/10
              </span>
              <img className="w-[60px] h-[60px] " src="/gtbg.png" alt="" />
            </div>
            <div>
              <img className="w-[30px] h-[30.2px] " src="/sq.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-[85%] ml-28 mt-14">
        <img
          className=" w-[217px] h-[80.6px] object-cover"
          src="/logo2.png"
          alt=""
        />
        <img
          className=" w-[299px] h-[60px] object-cover"
          src="/create.png"
          alt=""
        />
      </div>

      <div className=" ml-[80px] mt-28 mb-40">
        <span className="font-[700] text-[48px] gradient-text">FAQ</span>

        <div>
         <Dropdown/>
        </div>
      </div>
    </div>
  );
};

export default MidComp;
