import { useMemo, useState, useCallback } from "react"
import { addIPFSGateway, useDropsContractProvider, DropsComponents } from "@public-assembly/zora-drops-utils"

export function ImageRenderer() {

    return (
        <div className="flex flex-row h-fit items-center w-full  cursor-pointer border-[#E6E6E6] border-b-[1px] border-t-[1px] border-r-[1px]">
            <DropsComponents.Thumbnail style={{ width: '100%', height: '100%' }}  />
        </div>
    )
}