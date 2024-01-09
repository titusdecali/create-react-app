import { usePrivy } from '@privy-io/react-auth';

function SendTransactionButton() {
  const { user, sendTransaction } = usePrivy();

  // Replace this with the UnsignedTransactionRequest you'd like your user to send
  const unsignedTx = {
    to: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    chainId: 1,
    value: '0x3B9ACA00',
  };

  // Replace this with the text you'd like on your transaction modal
  const uiConfig = {
    header: 'Sample header text',
    description: 'Sample description text',
    buttonText: 'Sample button text'
  };

  // Users must have an embedded wallet at `user.wallet` to send a transaction.
  return (
    <button disabled={!user.wallet} onClick={async () => {
      const txReceipt = await sendTransaction(unsignedTx, uiConfig);
      // `txReceipt` is an object of type `TransactionReceipt`. From this object, you can
      // access your transaction's `transactionHash`, `blockNumber`, `gasUsed`, and
      // more.
    }}>
      Send ETH
    </button>);
}

export default SendTransactionButton;