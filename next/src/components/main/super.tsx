import { useState } from "react";
import {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
export default function Super() {
  const [selectedCpuRangeValue, setSelectedCpuRangeValue] = useState(1);
  const wallet = useWallet();
  const { connection } = useConnection();
  const { publicKey, signTransaction,sendTransaction } = wallet;
  /* async function sendSolanaTransaction() {
    try {
      const network = "https://api.mainnet-beta.solana.com/"; // or use testnet/devnet
      const connection = new Connection(network);
      const wallet = useWallet();
      const { publicKey, signTransaction } = wallet;
      const programId = new PublicKey("HivXK47ZLnXmcx9Ak6eiiNN71RASGW3RDJnSDz1WTWBJ");
      // SetData işlemi için gerekli parametreler
      const isApprove = 1;
      const trafficScale = 42;

      // İşlem verisini oluşturun
      const data = Buffer.from([0, isApprove, trafficScale]);

      // SetData işlemi oluşturun
      const transaction = new Transaction().add({
        keys: [{ pubkey: wallet.publicKey, isSigner: true, isWritable: false }],
        programId,
        data,
      });

      // İşlemi imzalayın
      const signature = await wallet.signTransaction(transaction);

      // İşlemi gönderin
      const result = await sendAndConfirmTransaction(connection, transaction, [
        wallet.payer,
      ]);

      console.log("İşlem başarıyla tamamlandı. İmza:", signature);
    } catch (error) {
      console.error("İşlem sırasında hata oluştu:", error);
    }
  } */

  let greetedPubkey = publicKey;
  let programId = new PublicKey("HivXK47ZLnXmcx9Ak6eiiNN71RASGW3RDJnSDz1WTWBJ");

  async function sayHello(e:any): Promise<void> {
    e.preventDefault();
    console.log("Saying hello to", greetedPubkey?.toBase58());
    const instruction = new TransactionInstruction({
      //@ts-ignore
      keys: [{ pubkey: greetedPubkey, isSigner: false, isWritable: true }],
      programId,
      data: Buffer.alloc(0), // All instructions are hellos
    });
    let connection = new Connection("https://api.devnet.solana.com");
    const payer = signTransaction;

   
    if (!publicKey) throw new Error("No connected wallet");

        // 890880 lamports as of 2022-09-01
        const lamports = await connection.getMinimumBalanceForRentExemption(0);

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: programId,
                lamports,
            })
        );

        const {
            context: { slot: minContextSlot },
            value: { blockhash, lastValidBlockHeight }
        } = await connection.getLatestBlockhashAndContext();

        const signature = await sendTransaction(transaction, connection, { minContextSlot });

        await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
        console.log("signature", signature);
    
  }
  return (
    <>
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="javascript:;">
                  <i className="bx bx-home-alt"></i>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Super Computer
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="col-xl-9">
        <div className="card">
          <form onSubmit={sayHello} className="card-body">
            <div className="mb-5 mt-3">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  name="approveSuperComputer"
                  id="approveSuperComputer"
                />
                <label
                  className="form-check-label"
                  htmlFor="approveSuperComputer"
                >
                  I approve participation in the Super Computer Service
                </label>
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="rangeCpu" className="form-label">
                CPU Usage (1core-128core)
              </label>

              <div className="d-flex justify-content-between">
                <div className="p-1">1 Core</div>

                <div className="p-1">128 Core</div>
              </div>
              <input
                type="range"
                className="form-range"
                id="rangeCpu"
                name="rangeCpu"
                min="1"
                max="128"
                onChange={(e: any) => setSelectedCpuRangeValue(e.target.value)}
                /* oninput="showRangeValue(this.value)" onchange="showRangeValue(this.value)" */
              />
            </div>
            <div className="mb-5">
              <h5>
                <span
                  id="selectedCpuRangeValue"
                  className="badge bg-warning text-dark"
                >
                  {selectedCpuRangeValue} core
                </span>
              </h5>
            </div>
            <div className="mb-3">
              <button
                id="saveSuperComputer"
                className="btn btn-light"
                type="submit"
              >
                Save Changes
              </button>
              <button
                id="processingSuperComputer"
                className="btn btn-light d-none"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Processing...
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
