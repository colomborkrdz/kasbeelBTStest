// @ts-nocheck
import { DropsContractProvider, DropsComponents } from "@public-assembly/zora-drops-utils"
import { ImageRenderer } from "./ImageRenderer"
import { MintEdition } from "./MintEdition"
import { Timeline } from "./Timeline"

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

  // function SimpleRender() {
  //   <div style={{width: 400}}>
  //     <DropsComponents.Thumbnail style={{ width: 100%, height: 100%}} />
  //     <DropsComponents.MetadataName label={false} />
  //     <DropsComponents.MetadataCreator />
  //     <MintEdition />
  //   </div>
  // }

  return (
  // <section className='border-2 border-red-500 h-full w-fit'>
  //   <DropsContractProvider collectionAddress={"0xa3ba36ce1af5fa6bb8ab35a61c8ae72293b38b32"} key={"0xa3ba36ce1af5fa6bb8ab35a61c8ae72293b38b32"} networkId="5" >
  //     <DropsComponents.Thumbnail style={{ width: "100%", height: "100%" }} />
  //     <DropsComponents.MetadataName label={false} />
  //     <DropsComponents.MetadataCreator />
  //   </DropsContractProvider>
  // {/* {hardcodedGoerli.map((address) =>
  //   <DropsContractProvider collectionAddress={address} key={address} networkId="5" >
  //     <div className="border-[#E6E6E6] border-b-[1px] border-t-[1px] border-r-[1px] flex flex-row flex-wrap h-full gap-4">
  //       <SimpleRender />
  //     </div>
  //   </DropsContractProvider>
  // )} */}
  // </section>
<section id="editions" className='grid grid-cols-1 sm:grid-cols-3 pb-20 gap-8'>
{hardcodedGoerli.map((address) =>
  <DropsContractProvider collectionAddress={address} key={address} networkId="5" >
    <div className="flex flex-col ">

      <ImageRenderer />
      <div className="flex flex-col">
        <div className="pt-8 flex flex-col items-center">
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

{/* <section id="editions" className='border-red-200 border-2 grid grid-cols-1 sm:grid-cols-3 w-[90%] pb-20 '>
{hardcodedGoerli.map((address) =>
  <DropsContractProvider collectionAddress={address} key={address} networkId="5" >
    <div className="border-[#E6E6E6] border-b-[1px] border-t-[1px] border-r-[1px] flex flex-row flex-wrap h-full gap-4">

      <DropsComponents.Thumbnail style={{ width: "100%", height: "100%" }} />
      <div className="flex flex-col h-full w-full font-normal gap-10">
        <div className="text-[18px] font-normal flex flex-col text-center w-full">
          <DropsComponents.MetadataName label={false} />
          <DropsComponents.MetadataCreator />
        </div>
        <MintEdition />
      </div>
    </div>
  </DropsContractProvider>
)}
</section> */}