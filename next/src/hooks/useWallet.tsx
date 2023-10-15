import { Program, AnchorProvider } from "@project-serum/anchor";

import {
  useConnection,
  useWallet as useAdapterWallet,
  useAnchorWallet,
  WalletContextState,
  AnchorWallet,
} from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";

// very important. We need this because our program needs to know how did we design our Anchor program
// which functions are there and how to use them
//import idl from "../../target/idl/sol_twitter.json";

// Solana Explorer : https://explorer.solana.com

// we need the program id so that we can fetch the accounts/programs related to this account
//const programID = new PublicKey(idl.metadata.address);

const opts = {
  preflightCommitment: "processed",
};

// defining the return type of each variable.
// this will help us when we use these variables later
export const useWalletHook = (): {
  connection: Connection;
  adapterWalletObj: WalletContextState;
  anchorWalletObj: AnchorWallet | undefined;
  provider?: AnchorProvider;
  program?: Program;
} => {
  // we will use connection as a context to connect to solana blockchain
  // is it localhost, devnet, testnet or mainnet
  const { connection } = useConnection();

  // adapterwallet provides lots of information regaring who is connected to the wallet
  // the balance, public key etc
  const adapterWalletObj = useAdapterWallet();

  // anchor wallet is an interface that will help us talk to the user's wallet
  const anchorWalletObj = useAnchorWallet();

  // provider is required by the program, that will parse everyting for us from blockchain to normal data structure
  /* const provider = new AnchorProvider(connection, adapterWalletObj, {});
  const program = new Program(idl, programID, provider); */

  // we return everything from here, so that whoever calls this hook, gets all this data
  // then they can use it in whichever way they like.
  return {
    connection,
    adapterWalletObj,
    anchorWalletObj,
    /* provider,
    program, */
  };
};

export default useWalletHook;