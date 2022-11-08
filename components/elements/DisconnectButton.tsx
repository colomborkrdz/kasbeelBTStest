import { useAuth } from 'hooks/useAuth'

export function DisconnectButton() {
  const { logout, isConnected } = useAuth()
  if (!isConnected) return null
  return (
    <button
      className="text-md right-4 top-4 sm:text-lg sm:right-10 sm:top-10 absolute hover:text-[#32CD32]"
      onClick={() => logout()}>
      Disconnect
    </button>
  )
}
