import { useTonConnectUI } from '@tonconnect/ui-react';

const transaction = {
    validUntil: 500,
    messages: [
        {
            address: "0:412410771DA82CBA306A55FA9E0D43C9D245E38133CB58F1457DFB8D5CD8892F", // destination address
            amount: "20000000" //Toncoin in nanotons
        }
    ]
}

export const Settings = () => {
    const [tonConnectUI, _] = useTonConnectUI();

    return (
        <div>
            <button onClick={() => tonConnectUI.sendTransaction(transaction, {})}>
                Send transaction
            </button>
        </div>
    );
};
