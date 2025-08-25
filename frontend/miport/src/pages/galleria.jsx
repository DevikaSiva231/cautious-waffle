import React from "react";

function Galleria() {
    return (
    <>
        <div className="w-full text-center text-lg font-semibold">
          - - - Galleria - - -
        </div>

        <div class="grid grid-cols-3 grid-rows-8 gap-4">
            <div class="bg-yellow-200 col-span-1 row-span-3 flex items-center justify-center text-white">01</div>
            <div class="bg-yellow-200 col-span-2 row-span-2 flex items-center justify-center text-white">02</div>
            <div class="bg-yellow-200 col-span-1 row-span-2 flex items-center justify-center text-white">03</div>
            <div class="bg-yellow-200 row-span-3 flex items-center justify-center text-white">04</div>
            <div class="bg-yellow-200 col-span-1 row-span-1 flex items-center justify-center text-white">05</div>
            <div class="bg-yellow-200 col-span-2 row-span-2 flex items-center justify-center text-white">06</div>
            <div class="bg-yellow-200 col-span-1 row-span-1 flex items-center justify-center text-white">07</div>
        </div>
    </>
    )
}

export default Galleria;
