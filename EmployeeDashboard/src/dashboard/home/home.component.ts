import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../app/services/employee.service';
import { EmpAddEditComponent } from '../../app/emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit {

  displayedColumns: string[] = [ 
    'emp_id',
   'firstName',
  'lastName',
   'email',
   'dob',
   'gender',
   'education',
   'company',
   'experience',
   'package',
   'action'
 
 ];
dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog:MatDialog,private _empService:EmployeeService){

  }

  ngOnInit(): void {
    this.loadEmployee();
  }

  loadEmployee(){
    this._empService.getEmployee().subscribe({
      next:(val:any)=>{
        console.log(val);
        this.dataSource =new MatTableDataSource(val);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      },
      error:(err)=>{
        console.log(err);
      },

    });
  }

  openAddEditForm(){
    const dialogRef=this._dialog.open(EmpAddEditComponent);
    console.log("this is what open modal form returns-->",dialogRef);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditForm(data:any){
    const dialogRef=this._dialog.open(EmpAddEditComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.loadEmployee();
        }
      },
    });
  }

    deleteEmployee(id:string){
      this._empService.deleteEmployee(id).subscribe({
        next:(res)=>{
          alert("Employee Deleted!");
          this.loadEmployee();
  
        },
        error:console.log,
      })
    }


}
