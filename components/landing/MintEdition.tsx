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

const svgLoader = () => {
  return (
    <div className="flex flex-row justify-center w-full h-full">
      <img
      className="text-black rounded-full" 
      width="26px"
      src="/SVG-Loaders-master/svg-loaders/tail-spin.svg"
      />
    </div>
  )
}

export function MintEdition() {
  const { purchase, mintStatus, transaction, inventory, balance, totalPrice } = useDropsContractProvider()
  // console.log("mintStatus", mintStatus)
  // if (mintStatus?.isEnded) return null

  const mintCta = transaction?.purchaseLoading || transaction?.purchaseWaitLoading 
    ? svgLoader() 
    : transaction?.purchaseSuccess
    ? "minted" 
    : "mint"

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
                  className={
                    `${transaction?.purchaseLoading || transaction?.purchaseWaitLoading ?
                      "text-black bg-white border-black border-[1px]"
                      : transaction?.purchaseSuccess
                      ? "bg-[#10D600] border-[1px] border-[#24FF00] text-white" 
                      : "border-[1px]  border-black bg-black text-white hover:bg-white hover:text-black"
                    } px-2 py-1 mt-5 w-[70px]`}
                >
                  {mintCta}
                </button>        
            </>
          }
          />                          
      </div>            
  )
}