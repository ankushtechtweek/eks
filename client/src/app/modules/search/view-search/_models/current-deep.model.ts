export class CurrentDeed {
  LenderCode!: string;
  LenderName!: string;
  MortgageAmount: string = '';
  MortgageDate!: string;
  MortgageDueDate!: string;
  MortgageLoanTypeCode!: string;
  MortgageTerm!: string;
  MortgageTermCode: string = '';
  SecondMortgageAmount!: string;
  SecondMortgageLoanTypeCode!: string;
}
