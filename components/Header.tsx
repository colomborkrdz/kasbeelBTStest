import { Socials } from "./Socials"
import { DisconnectButton } from "./elements"

export function Header() {
  return (
    <header className="flex flex-row justify-center items-center w-full pt-24 text-center">
      <div className="flex flex-row flex-wrap items-center">
        <span className="pb-2 text-[24px] flex flex-row w-full justify-center">
          Nouns Builder is live
        </span>
        <span className="text-[18px] flex flex-row w-full justify-center">
          We are releasing three artifacts that were integral to the cration of this new piece
        </span>
        <span className="text-[18px] flex flex-row w-full justify-center">
          of infrastructure and in advance of the launch of the Builder DAO.
        </span>        
      </div>
      <DisconnectButton />
    </header>
  )
}
