import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormattedFundsMovementsModel } from 'src/app/shared/models/formatted-funds-movements.model';

@Component({
  selector: 'app-funds-history-table',
  templateUrl: './funds-history-table.component.html',
  styleUrls: ['./funds-history-table.component.css']
})
/**
 * Component for displaying a table with the user's funds movements history
 *
 * @export
 * @class FundsHistoryTableComponent
 */
export class FundsHistoryTableComponent implements AfterViewInit {
  @Input() formattedFundsMovements!: FormattedFundsMovementsModel[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<FormattedFundsMovementsModel>;
  dataSource = new MatTableDataSource();
  filter: string = '';

  ngOnInit() {
    this.dataSource.data = this.formattedFundsMovements;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter() {
    this.dataSource.filter = this.filter.trim().toLocaleLowerCase();
  }

  clearFilter() {
    this.dataSource.filter = '';
    this.filter = '';
  }

  displayedColumns: string[] = ['title', 'date', 'amount'];
}
