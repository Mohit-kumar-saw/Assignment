import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const handleOpen = () => {
        setIsOpen(prev => !prev);
    };
    const handleOpen1 = () => {
        setIsOpen1(prev => !prev);
    };
    const handleOpen2 = () => {
        setIsOpen2(prev => !prev);
    };

    return (
        <div className='flex flex-col gap-6'>
            <div
                onClick={handleOpen}
                className={`justify-between px-2 w-[848px] rounded-[12px] border-2 border-[#06286E] flex items-center pl-5  ${isOpen ? "h-[88px]" : "h-[58px]"} overflow-hidden transition-height ease-in-out duration-300`}
                aria-expanded={isOpen}
                aria-labelledby="dropdown-button"
            >
                <div className="flex flex-col justify-center  text-[16px] font-[600]">
                    Can education flashcards be used for text preparation?{" "}
                    {isOpen && (
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint natus iure officiis tempora suscipit voluptate minus fuga sunt sapiente possimus quae, nostrum molestiae quo ex earum nulla quia ipsam.
                        </div>
                    )}
                </div>
                <div><img src="/drop.png" alt="" /></div>
            </div>
            <div
                onClick={handleOpen1}
                className={`justify-between px-2 w-[848px] rounded-[12px] border-2 border-[#06286E] flex items-center pl-5  ${isOpen1 ? "h-[88px]" : "h-[58px]"} overflow-hidden transition-height ease-in-out duration-300`}
                aria-expanded={isOpen1}
                aria-labelledby="dropdown-button"
            >
                <div className="flex flex-col justify-center  text-[16px] font-[600]">
                    Can education flashcards be used for text preparation?{" "}
                    {isOpen1 && (
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint natus iure officiis tempora suscipit voluptate minus fuga sunt sapiente possimus quae, nostrum molestiae quo ex earum nulla quia ipsam.
                        </div>
                    )}
                </div>
                <div><img src="/drop.png" alt="" /></div>
            </div>
            <div
                onClick={handleOpen2}
                className={`justify-between px-2 w-[848px] rounded-[12px] border-2 border-[#06286E] flex items-center pl-5  ${isOpen2 ? "h-[88px]" : "h-[58px]"} overflow-hidden transition-height ease-in-out duration-300`}
                aria-expanded={isOpen2}
                aria-labelledby="dropdown-button"
            >
                <div className="flex flex-col justify-center  text-[16px] font-[600]">
                    Can education flashcards be used for text preparation?{" "}
                    {isOpen2 && (
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint natus iure officiis tempora suscipit voluptate minus fuga sunt sapiente possimus quae, nostrum molestiae quo ex earum nulla quia ipsam.
                        </div>
                    )}
                </div>
                <div><img src="/drop.png" alt="" /></div>
            </div>
        </div>
    );
};

export default Dropdown;
