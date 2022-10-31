// @ts-nocheck

import { useDropsContractProvider, DropsComponents } from "@public-assembly/zora-drops-utils"
import { AuthCheck } from "components/elements"
import Countdown from "react-countdown"

function MintPropmpt() {
  return (
    <div className="mint-prompt">
      <span>Connect ETH wallet to mint</span>
    </div>
  )
}

const countdownRenderer = ({ hours, minutes, seconds }) => {
  return (
    <div>
      {`${hours}h ` + `${minutes}m ` + `${seconds}s`}
    </div>
  )
}

export function MintEdition() {
  const { mintStatus, transaction, inventory } = useDropsContractProvider()
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
                <DropsComponents.TotalPrice label={false} />                 
              </div>           
              <div className=" w-full text-center">
                {inventory?.totalSold + ` minted `}
              </div>   
              <div className=" w-full text-center">
                <DropsComponents.SalesTiming />   
                <Countdown date={'2022-11-08T11:00:00'} 
                  intervalDelay={1000}
                  precision={0}
                  renderer={countdownRenderer}
                />              
              </div>                         

              <div className="bg-black text-white px-2 py-1 mt-5">
                <DropsComponents.MintButton mintCta="mint" />
              </div>                                       
            </div>            
            <div className="relative pt-5 w-full text-center">
                <DropsComponents.TxStatus />
            </div>     
            <div>
              {transaction ? transaction.txHash : "no hash yet"}
            </div>
          </>
        }
      />
    </div>
  )
}