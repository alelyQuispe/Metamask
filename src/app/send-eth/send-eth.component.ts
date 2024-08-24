import { Component } from '@angular/core';
import Web3 from 'web3';

@Component({
  selector: 'app-send-eth',
  templateUrl: './send-eth.component.html',
  styleUrls: ['./send-eth.component.css']
})
export class SendEthComponent {
  web3: Web3 | undefined;
  recipientAddress: string = '';
  amount: string = '';
  transactionHash: string | undefined;

  constructor() { }

  async sendEth() {
    const ethereum = (window as any).ethereum;

    if (ethereum && this.recipientAddress && this.amount) {
      try {
        this.web3 = new Web3(ethereum);
        await ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await this.web3.eth.getAccounts();
        const senderAddress = accounts[0];

        const transaction = await this.web3.eth.sendTransaction({
          from: senderAddress,
          to: this.recipientAddress,
          value: this.web3.utils.toWei(this.amount, 'ether')
        });

        // Convertir el transactionHash a string
        this.transactionHash = String(transaction.transactionHash);
      } catch (error) {
        console.error("Transaction failed", error);
      }
    } else {
      console.warn("Please fill in the recipient address and amount.");
    }
  }
}