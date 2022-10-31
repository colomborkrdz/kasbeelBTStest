// @ts-nocheck
import { DropsContractProvider, DropsComponents } from "@public-assembly/zora-drops-utils"
import { ImageRenderer } from "./ImageRenderer"
import { MintEdition } from "./MintEdition"

export function EditionsDisplay({curationContractAddress}: string) {

  const hardcodedMainnet = [
    "0x2f0146ca3c62a33177959565ae9df2f86cf01551",
    "0xd945f759d422ae30a6166838317b937de08380e3",
    "0xcab1d8574d1a38651f544bbc45ce32541790abef"
  ]

  const hardcodedGoerli = [
    "0xa3ba36ce1af5fa6bb8ab35a61c8ae72293b38b32",
    "0x83b9f7ddd165e32ebea7da1b54405bf8c16708f7",
    "0x31bed60ae0627575725f4460139f095cd9e4a08b"
  ]  

  return (
    <section id="editions" className='grid grid-cols-1 sm:grid-cols-3 w-[90%] py-6 pb-20 '>
      {hardcodedGoerli.map((address) =>
        <DropsContractProvider collectionAddress={address} key={address} networkId="5" >
          <div className="flex flex-row flex-wrap gap-4">
            <ImageRenderer />
            <div className="flex flex-col w-full font-normal gap-10">
              <div className="text-[18px] font-normal flex flex-col text-center w-full">
                <DropsComponents.MetadataName label={false} />
                <DropsComponents.MetadataCreator />
              </div>
              <MintEdition />
            </div>
          </div>
        </DropsContractProvider>
      )}
    </section>
  )
}