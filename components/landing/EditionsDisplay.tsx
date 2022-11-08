// @ts-nocheck
import { DropsContractProvider, DropsComponents } from "@public-assembly/zora-drops-utils"
import { ImageRenderer } from "./ImageRenderer"
import { MintEdition } from "./MintEdition"
import Image from "next/image"

export function EditionsDisplay() {

  const btsContractAddress = "0x6ea3b458b47410239e92ffc1136afc838dd01156";
  
  return (
    <section id="editions" className='grid grid-cols-1 justify-items-center'>
      <DropsContractProvider collectionAddress={btsContractAddress} key={btsContractAddress} networkId="1" >
        <div className="edition-card w-full sm:w-[75%] md:w-[33%] mx-2 sm:mx-0 flex flex-col justify-end pb-16">
          <div className="h-[400px] w-full  flex flex-col">
            <Image 
              height={450}
              width={300}
              layout='responsive'
              objectFit='contain'
              src={"https://ipfs.io/ipfs/bafkreiekrwyr4p3va77rnyad6urnfjuoisnwfxwl2zb5adz3q6q5buy4ye"}
            />
          </div>
          {/* <ImageRenderer  /> */}
          <div className="flex flex-col">
            <div className="pt-8 flex flex-col items-center">
              <DropsComponents.MetadataName label={false} />
              <DropsComponents.MetadataCreator />
            </div>
            <MintEdition />
          </div>
        </div>
      </DropsContractProvider>
    </section>  
  )
}