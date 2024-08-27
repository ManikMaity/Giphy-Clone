import React, { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";

function SortBtn({searchSort, setSearchSort}) {

    const [showSort, setShowSort] = useState(false);

    function onSortChange(e){
        setSearchSort(e.target.value);
        setShowSort(false);
    }


  return (
    <div className="relative">

    <button onClick={() => setShowSort(!showSort)} className="btn text-base py-1">
        <TbArrowsSort className="" />
        <p className="font-bold">Sort</p>
    </button>


    {showSort && <div className="h-36 w-56 bg-gray-900 absolute top-[110%] flex flex-col gap-2 right-0 rounded font-semibold px-6 py-4">
        <p className="mb-2">Sort Content By</p>

        <div className="w-full flex justify-between items-center">
            <label htmlFor="relevant">Relevant</label>
            <input type="radio" onChange={onSortChange} className="radio" value="relevant" name="sort" id="relevant" checked={searchSort == "relevant"} />
        </div>

        <div className="w-full flex justify-between items-center">
            <label htmlFor="recent">Recent</label>
            <input type="radio" onChange={onSortChange} className="radio" value="recent" name="sort" id="recent" checked={searchSort == "recent"}/>
        </div>

    </div>}

    </div>
    
  );
}

export default SortBtn;
