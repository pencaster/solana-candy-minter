import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Button } from "@solana/wallet-adapter-react-ui/lib/Button"
import React from "react"
import { Flex } from "theme-ui"

type Props = {}

const MintButton = (props: Props) => {
  const wallet = useWallet()

  return (
    <div>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Mint it</h2>
        <WalletMultiButton />
      </Flex>

      <Flex sx={{ flexDirection: "column" }}>
        <p>
          Candy machine address: {process.env.NEXT_PUBLIC_CANDY_MACHINE_ADDRESS}
        </p>

        {wallet.publicKey ? (
          <p>Wallet address: {wallet.publicKey.toString()}</p>
        ) : null}
      </Flex>

      <Flex
        sx={{
          justifyContent: "center",
          margin: "1.6rem 0",
        }}
      >
        <Button disabled={!wallet.publicKey}>
          {wallet.publicKey
            ? "Mint one token now!"
            : "Connect your wallet first"}
        </Button>
      </Flex>
    </div>
  )
}

export default MintButton
