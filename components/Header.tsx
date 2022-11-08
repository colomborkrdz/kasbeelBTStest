import { DisconnectButton } from "./elements"
import Link from "next/link"

export function Header() {
  return (
    <div className="flex flex-row justify-center items-center sm:w-full h-[25vh] pt-0 pb-0 sm:h-full sm:pt-14 sm:pb-8 text-center">
      <div className="flex flex-row flex-wrap justify-center items-center w-[95%] sm:w-full">
        <span className="pb-2 text-[24px] flex flex-row w-full justify-center">
          <Link
              href="/"
            >
            <a className="hover:text-[#24FF00]">
            {"Mint"}
            </a>
          </Link> 
          {"✶"}   
          <Link
              href="/gallery"
            >
            <a className="hover:text-[#24FF00]">
            {"Gallery"}
            </a>
          </Link>                
        </span>
        <span className="text-[18px] flex flex-row w-auto justify-center">
          {"A collection of behind the scenes footage from Kasbeel's music video shoot for Reflejo"}
        </span>                
      </div>
      <DisconnectButton />
    </div>
  )
}
