export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      if (this.balance > amount) {
        this.balance += amount;
        console.log(`Deposito de ${amount} realizado com sucesso!`);
      }
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Saque de R$${amount.toFixed(2)} realizado com sucesso!`);
      } else {
        console.log("Saldo insuficiente para realizar o saque");
      }
    }
  };

  getBalance = (): void => {
    console.log(`Saldo atual: R$${this.balance.toFixed(2)}`);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
