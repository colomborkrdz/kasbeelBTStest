import { useAuth } from 'hooks/useAuth'

export function DisconnectButton() {
  const { logout, isConnected } = useAuth()
  if (!isConnected) return null
  return (
    <button
      className="text-sm right-2 top-2 sm:text-lg sm:right-10 sm:top-10 absolute hover:text-[#FF89DE]"
      onClick={() => logout()}>
      Disconnect
    </button>
  )
}
