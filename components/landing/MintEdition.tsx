import { useDropsContractProvider, DropsComponents } from "@public-assembly/zora-drops-utils"
import { AuthCheck } from "components/elements"

function MintPropmpt() {
  return (
    <div className="mint-prompt">
      <span>Connect ETH wallet to mint</span>
    </div>
  )
}

export function MintEdition() {
  // const { mintStatus } = useDropsContractProvider()
  // console.log("mintStatus", mintStatus)
  // if (mintStatus?.isEnded) return null
  return (
    <div>
      <AuthCheck
        connectCopy={<MintPropmpt />}
        formUI={
          <>
            <div className="flex flex-row w-full justify-center flex-wrap ">
              <div className="w-full text-center">
                <DropsComponents.TotalPrice label={"price?"} />                 
              </div>           
              <div className=" w-full text-center">
                <DropsComponents.Inventory label={"minted?"} />                 
              </div>   
              <div className=" w-full text-center">
                <DropsComponents.SalesTiming />                 
              </div>                                  
              <div className="bg-black text-white px-2 py-1 mt-5">
                <DropsComponents.MintButton mintCta="mint" />
              </div>                                       
            </div>            
            <div className="relative pt-5 w-full text-center">
                <DropsComponents.TxStatus />
            </div>     
          </>
        }
      />
    </div>
  )
}