export interface Applicant {
    loanId: number;
    surname: string;
    firstName: string;
    middleInitial: string;
    loanAmount: number;
    typeOfLoan: string;
    purpose: string;
    dateSubmitted: Date;
}
