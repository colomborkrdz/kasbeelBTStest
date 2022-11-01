import React from "react"
import { DropsComponents, useDropsContractProvider } from "@public-assembly/zora-drops-utils"

export function ImageRenderer() {

    const { transaction } = useDropsContractProvider();

    const madeWithZora = () => {
        return (
            <div className="border-2 h-full content-end relative flex w-full flex-row flex-wrap  justify-center ">
                <a
                href={`https://zora.co/`}
                className="relative h-[26px] w-[26px] overflow-visible md:h-[32px] md:w-[32px]"
                >
                <svg
                    width="33"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    className="absolute inset-0 h-full w-full overflow-visible object-cover"
                    style={{ boxShadow: "0px -0px 10000px transparent" }}
                >
                    <rect
                    x="0.5"
                    width="32"
                    height="32"
                    rx="16"
                    fill="url(#zorb_svg__a)"
                    className="absolute inset-0 h-full w-full object-cover"
                    ></rect>
                    <defs>
                    <radialGradient
                        id="zorb_svg__a"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(21.287 7.794) scale(24.093)"
                    >
                        <stop offset="0.156" stopColor="#DCC8D0"></stop>
                        <stop offset="0.302" stopColor="#78C8CF"></stop>
                        <stop offset="0.427" stopColor="#4D959E"></stop>
                        <stop offset="0.557" stopColor="#305EB9"></stop>
                        <stop offset="0.797" stopColor="#311F12"></stop>
                        <stop offset="0.906" stopColor="#684232"></stop>
                        <stop offset="1" stopColor="#2D1C13"></stop>
                    </radialGradient>
                    </defs>
                </svg>
                </a>       
                <span className="flex flex-row justify-center w-full">made with zora</span>
            </div>            
        )        
    }

    const mintReciept = () => {
        return (
            <div className="text-[#949494] border-[1px] flex flex-row flex-wrap w-[full] relative aspect-square">
                <div className="mt-6 w-full h-fit flex flex-row flex-wrap ">
                    <div className=" justify-center w-full flex flex-row flex-wrap ">
                        <a className="hover:underline" href={`https://goerli.etherscan.io/tx/${transaction?.txHash}`}>
                        view on etherscan
                        </a>    
                    </div>
                    {/* <div className=" justify-center w-full flex flex-row flex-wrap ">
                        view on IPFS
                    </div>
                    <div className=" justify-center w-full flex flex-row flex-wrap ">
                        view metadata 
                    </div> */}
                </div>
                <div className=" self-center h-fit w-full flex flex-row flex-wrap ">
                    <div className=" justify-center w-full flex flex-row flex-wrap ">
                        ERC-721
                    </div>
                    <div className=" justify-center w-full flex flex-row flex-wrap ">
                        Ethereum
                    </div>
                </div>        
                {/* {madeWithZora()} */}
                <div className=" mb-6  self-end justify-center   relative   flex w-full flex-row flex-wrap">
                <a
                href={`https://zora.co/`}
                className="relative h-[26px] w-[26px] overflow-visible md:h-[32px] md:w-[32px]"
                >
                <svg
                    width="33"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    className="absolute inset-0 h-full w-full overflow-visible object-cover"
                    style={{ boxShadow: "0px -0px 10000px transparent" }}
                >
                    <rect
                    x="0.5"
                    width="32"
                    height="32"
                    rx="16"
                    fill="url(#zorb_svg__a)"
                    className="absolute inset-0 h-full w-full object-cover"
                    ></rect>
                    <defs>
                    <radialGradient
                        id="zorb_svg__a"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(21.287 7.794) scale(24.093)"
                    >
                        <stop offset="0.156" stopColor="#DCC8D0"></stop>
                        <stop offset="0.302" stopColor="#78C8CF"></stop>
                        <stop offset="0.427" stopColor="#4D959E"></stop>
                        <stop offset="0.557" stopColor="#305EB9"></stop>
                        <stop offset="0.797" stopColor="#311F12"></stop>
                        <stop offset="0.906" stopColor="#684232"></stop>
                        <stop offset="1" stopColor="#2D1C13"></stop>
                    </radialGradient>
                    </defs>
                </svg>
                </a>       
                <span className="flex flex-row justify-center w-full">made with zora</span>
            </div>                   
            </div>
        )
    }

    return (
        <>
        { transaction?.purchaseSuccess ? (
            mintReciept()
        ) : (
        <div className="border-[1px] w-full relative aspect-square">    
            <DropsComponents.Thumbnail style={{ width: '100%', height: '100%' }}  />
        </div>
        )}
        </>
    )
}