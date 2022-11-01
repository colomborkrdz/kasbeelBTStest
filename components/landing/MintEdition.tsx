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
  const { purchase, mintStatus, transaction, inventory, balance, totalPrice } = useDropsContractProvider()
  // console.log("mintStatus", mintStatus)
  // if (mintStatus?.isEnded) return null

  const mintCta = transaction?.purchaseSuccess ? "minted" : "mint"

  const totalPriceRender = () => {
    if(totalPrice?.pretty && totalPrice?.pretty == "0.0") {
      return (
      <div className=" w-full text-center">
        {"Free"}                 
      </div>          
      )
    } else if (totalPrice?.pretty && totalPrice?.pretty == "1.0") {
      return (
      <div className=" w-full text-center">
        {"1 ETH"}              
      </div>
      )     
    } else {
      return (
        <div className=" w-full text-center">
          <DropsComponents.TotalPrice label={false} ethSymbol={" ETH"} />                 
        </div>         
      )
    }
  }

  return (
      <div className="flex flex-row w-full justify-center flex-wrap pt-10">
        {totalPriceRender()}
        <div className=" w-full text-center">
          {inventory?.totalSold + ` minted `}
        </div>   
        <div className=" w-full text-center">
          <Countdown date={'2022-11-08T07:00:00'} 
            intervalDelay={1000}
            precision={0}
            renderer={countdownRenderer}
          />              
        </div>                                 
        <AuthCheck
          connectCopy={<MintPropmpt />}
          formUI={
            <>
                <button 
                  disabled={transaction?.purchaseSuccess}
                  onClick={() => purchase()} 
                  className={`${transaction?.purchaseSuccess ? 
                    "bg-[#10D600] border-[1px] border-[#24FF00] text-white" :  
                    "border-[1px]  border-black bg-black text-white hover:bg-white hover:text-black"}
                    px-2 py-1 mt-5 w-[70px]`}
                >
                  {mintCta}
                </button>            
            </>
          }
          />                          
      </div>            
  )
}


// old logic for mint button
{/* {transaction?.purchaseSuccess == true ? (
  <div className="bg-[#10D600] border-[1px] border-[#24FF00] text-white px-2 py-1 mt-5">
    <DropsComponents.MintButton mintCta={mintCta} />
    <div>
      {transaction?.purchaseSuccess.toString()}
    </div>
    <button 
      onClick={() => purchase()} 
      className={`${transaction?.purchaseSuccess ? 
        "bg-[#10D600] border-[1px] border-[#24FF00] text-white" :  
        "bg-black text-white"}
        px-2 py-1`}
    >
      {mintCta}
    </button>
  </div>                 
) : (
  <div className="border-[1px] border-black hover:bg-white hover:text-black bg-black text-white px-2 py-1 mt-8">
    <DropsComponents.MintButton mintCta={mintCta} />
  </div>   
)} */}


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