import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Applicant } from '../interface/applicant';
import { MatSort } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-forward-view',
  templateUrl: './forward-view.component.html',
  styleUrl: './forward-view.component.css'
})
export class ForwardViewComponent {
  displayedColumns: string[] = ['loanId', 'surname', 'firstName', 'middleInitial', 'loanAmount', 'typeOfLoan', 
    'purpose', 'dateSubmitted', 'action'];
  dataSource: MatTableDataSource<Applicant> = new MatTableDataSource<Applicant>(ELEMENT_DATA);

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort; 
  }
}

const ELEMENT_DATA: Applicant[] = [
  {loanId: 1, surname: 'Dela Cruz', firstName: 'Juan', middleInitial: 'P', loanAmount: 50000, typeOfLoan: 'Personal', purpose: 'Education', dateSubmitted: new Date('2023-01-15')},
  {loanId: 2, surname: 'Reyes', firstName: 'Maria', middleInitial: 'C', loanAmount: 100000, typeOfLoan: 'Housing', purpose: 'House Renovation', dateSubmitted: new Date('2023-02-10')},
  {loanId: 3, surname: 'Santos', firstName: 'Jose', middleInitial: 'R', loanAmount: 75000, typeOfLoan: 'Car', purpose: 'Vehicle Purchase', dateSubmitted: new Date('2023-03-05')},
  {loanId: 4, surname: 'Garcia', firstName: 'Ana', middleInitial: 'M', loanAmount: 20000, typeOfLoan: 'Emergency', purpose: 'Medical Expenses', dateSubmitted: new Date('2023-04-12')},
  {loanId: 5, surname: 'Torres', firstName: 'Carlos', middleInitial: 'D', loanAmount: 150000, typeOfLoan: 'Business', purpose: 'Startup Capital', dateSubmitted: new Date('2023-05-18')},
  {loanId: 6, surname: 'Mendoza', firstName: 'Liza', middleInitial: 'A', loanAmount: 30000, typeOfLoan: 'Education', purpose: 'Tuition Fee', dateSubmitted: new Date('2023-06-20')},
  {loanId: 7, surname: 'Ramos', firstName: 'Pedro', middleInitial: 'G', loanAmount: 80000, typeOfLoan: 'Personal', purpose: 'Debt Consolidation', dateSubmitted: new Date('2023-07-01')},
  {loanId: 8, surname: 'Fernandez', firstName: 'Sofia', middleInitial: 'J', loanAmount: 120000, typeOfLoan: 'Housing', purpose: 'New House Purchase', dateSubmitted: new Date('2023-08-14')},
  {loanId: 9, surname: 'Lopez', firstName: 'Miguel', middleInitial: 'T', loanAmount: 5000, typeOfLoan: 'Emergency', purpose: 'Urgent Bills', dateSubmitted: new Date('2023-09-25')},
  {loanId: 10, surname: 'Cruz', firstName: 'Isabella', middleInitial: 'S', loanAmount: 60000, typeOfLoan: 'Car', purpose: 'Car Down Payment', dateSubmitted: new Date('2023-10-10')},
];