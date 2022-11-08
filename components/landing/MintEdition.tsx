// @ts-nocheck

import { useDropsContractProvider, DropsComponents } from "@public-assembly/zora-drops-utils"
import { AuthCheck } from "components/elements"
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi"
import Countdown from "react-countdown"
import { mintingModuleAbi } from "../../contracts/mintingModuleAbi";
import { ethers, BigNumber } from 'ethers'
import { useState } from 'react'
import { useAuth } from 'hooks/useAuth';
import MintQuantity from "components/elements/MintQuantity";

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
  
  const { inventory } = useDropsContractProvider()
  const { address } = useAuth()

  const [mintQuantity, setMintQuantity] = useState({ name: '1', queryValue: 1 })

  const nonBundlePricePerToken = 0.022;
  const bundlePricePerToken = 0.01;
  const mintingModuleContract = "0x0a82336cf2D2033713142c1fBEad291391f6975c";
  const zoraDropToTarget = "0x6eA3B458B47410239e92fFC1136AFc838dd01156";

  const totalMintPrice = mintQuantity.queryValue < 22 
    ? String(mintQuantity.queryValue * nonBundlePricePerToken)
    : String(mintQuantity.queryValue * bundlePricePerToken)

  const totalMintvalue = BigNumber.from(ethers.utils.parseEther(totalMintPrice)).toString()

  const { config, error: configError } = usePrepareContractWrite({
    addressOrName: mintingModuleContract,
    contractInterface: mintingModuleAbi,
    functionName: "flexibleMint",
    args: [
      zoraDropToTarget, // zoraDrop to target
      address, // mint recipient
      mintQuantity.queryValue // mint quantity
    ],
    overrides: {
      value: totalMintvalue
    },
  })

  const { 
    data, 
    isLoading, 
    isSuccess, 
    write: 
    purchaseNFT, 
    error: writeError 
  } = useContractWrite(config)

  const { data: waitData, isLoading: waitLoading } =
    useWaitForTransaction({
      hash: data?.hash
    })

  const mintCta = isLoading || data && waitLoading
    ? svgLoader() 
    : isSuccess
    ? "minted" 
    : "mint"

  return (
      <div className="flex flex-row w-full justify-center flex-wrap">
        <div className=" w-full text-center">
          {`${inventory?.totalSold}/${inventory?.totalSupply} minted`}
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
              <div className="flex flex-row w-full pt-6">
                <MintQuantity mintQuantityCB={setMintQuantity} />
                <button 
                  disabled={isSuccess || !purchaseNFT}
                  onClick={() => purchaseNFT?.()}                 
                  className={
                    `${isLoading || data && waitLoading ?
                      "text-white bg-black border-white border-[1px] border-l-[0px]"
                      : isSuccess
                      ? "bg-[#10D600] border-[1px] border-[#24FF00] text-white" 
                      : "border-[1px] border-l-[0px]  border-white bg-white text-black hover:bg-black hover:text-white"
                    }  min-h-[34px] h-[full] px-2   w-[70px]`}
                >
                  {mintCta}
                </button>        
              </div>
              {mintQuantity.name == "Bundle" ? (
                <div className="pt-2 text-[#24FF00]">
                  *Mints all 22 pieces from the collection
                </div>
              ) : (
                null
              )}
              { isSuccess ? (
              <a className="pt-2 flex flex-row w-full hover:underline justify-center  hover:text-[#24FF00]" href={`https://etherscan.io/tx/${data?.hash}`}>
                view txHash
              </a> 
              ) : (
              <div className="flex flex-row justify-center pt-2">
                {Number(totalMintPrice).toFixed(3) + " ETH"}
              </div>
              )}
            </>
          }
          />                          
      </div>            
  )
}