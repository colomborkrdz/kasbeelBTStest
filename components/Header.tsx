import { DisconnectButton } from "./elements"

export function Header() {
  return (
    <div className="flex flex-row justify-center items-center sm:w-full h-[100vh] pt-0 pb-0 sm:h-full sm:pt-12 sm:pb-6 text-center">
      <div className="flex flex-row flex-wrap justify-center items-center w-[95%] sm:w-full">
        <span className="pb-2 text-[24px] flex flex-row w-full justify-center">
          Nouns Builder is live
        </span>
        {/* <span className="text-[18px] flex flex-row w-full justify-center">
          We are releasing three artifacts that were integral to the creation of this new piece
        </span>
        <span className="text-[18px] flex flex-row w-full justify-center">
          of infrastructure and advance of the launch of the Builder DAO.
        </span>         */}
        <span className="text-[18px] flex flex-row w-[350px] sm:w-[550px] justify-center">
          We are releasing three artifacts that were integral to the creation of this new piece
          of infrastructure and advance of the launch of the Builder DAO.
        </span>                
      </div>
      <DisconnectButton />
    </div>
  )
}
