// @ts-nocheck

import { useDropsContractProvider, DropsComponents } from "@public-assembly/zora-drops-utils"
import { AuthCheck } from "components/elements"
import Countdown from "react-countdown"

function MintPropmpt() {
  return (
    <div className="mt-5 mint-prompt ">
      <span className="underline hover:decoration-[#32CD32]">Connect wallet to mint</span>
    </div>
  )
}

const countdownRenderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      {`${days}d ` + `${hours}h ` + `${minutes}m ` + `${seconds}s`}
    </div>
  )
}

export function MintEdition() {
  const { mintStatus, transaction, inventory, balance } = useDropsContractProvider()
  // console.log("mintStatus", mintStatus)
  // if (mintStatus?.isEnded) return null


  return (
      <div className="flex flex-row w-full justify-center flex-wrap pt-10">
        <div className=" w-full text-center">
          <DropsComponents.TotalPrice label={false} ethSymbol={" ETH"} />                 
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
        <AuthCheck
          connectCopy={<MintPropmpt />}
          formUI={
            <>
            {transaction?.purchaseSuccess ? (
                <div className="bg-[#10D600] border-[1px] border-[#24FF00] text-white px-2 py-1 mt-5">
                <DropsComponents.MintButton mintCta="minted" />
              </div>                 
            ) : (
              <div className="border-[1px] border-black hover:bg-white hover:text-black bg-black text-white px-2 py-1 mt-5">
                <DropsComponents.MintButton mintCta="mint" />
              </div>   
            )}
            </>
          }
          />                          
      </div>            
  )
}


// old logic for mint success ui

{/* <div className=" w-full text-center pt-2">
{process.env.NEXT_PUBLIC_NETWORK_URL == 1 ? (        
    <div className={`drops-ui__tx--component`}>
      <p className={`drops-ui__tx`}>
        {transaction?.purchaseLoading && (
          <span className="drops-ui__tx-processing-alert">Tx Processing</span>
        )}
        {transaction?.purchaseSuccess && <span className="drops-ui__tx-success-alert">Minted!</span>}
        <br />
        {transaction?.txHash && <a href={`https://etherscan.io/tx/${transaction?.txHash}`} className="drops-ui__tx-hash">txHash</a>}
      </p>
    </div>
    ) : (
      <div className={`drops-ui__tx--component`}>
      <p className={`drops-ui__tx`}>
        {transaction?.purchaseLoading && (
          <span className="drops-ui__tx-processing-alert">Tx Processing</span>
        )}
        {transaction?.purchaseSuccess && <span className="drops-ui__tx-success-alert">Minted!</span>}
        <br />
        {transaction?.txHash && <a href={`https://goerli.etherscan.io/tx/${transaction?.txHash}`} className="underline hover:decoration-[#32CD32] text-decoration drops-ui__tx-hash">txHash</a>}
      </p>
    </div>
    
  )}   
</div>        */}