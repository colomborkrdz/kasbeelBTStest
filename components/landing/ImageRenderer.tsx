import { useMemo, useState, useCallback } from "react"
import { addIPFSGateway, useDropsContractProvider, DropsComponents } from "@public-assembly/zora-drops-utils"

export function ImageRenderer() {

    return (
        <div className="border-2 w-full relative aspect-square">    
            <DropsComponents.Thumbnail style={{ width: '100%', height: '100%' }}  />
        </div>
    )
}