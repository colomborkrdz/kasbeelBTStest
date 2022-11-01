import React from "react"
import { DropsComponents } from "@public-assembly/zora-drops-utils"

export function ImageRenderer() {

    return (
        <div className="border-[1px] w-full relative aspect-square">    
            <DropsComponents.Thumbnail style={{ width: '100%', height: '100%' }}  />
        </div>
    )
}