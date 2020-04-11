import {Injectable} from '@angular/core';
import {ErrorDialogComponent} from '../component/error-dialog/error-dialog.component';
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {
    public isDialogOpen: Boolean = false;
    constructor(public dialog: MatDialog) { }
    openDialog(data): any {
        if (this.isDialogOpen) {
            return false;
        }
        this.isDialogOpen = true;
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '300px',
            data: data
        });

        dialogRef.afterClosed().subscribe(() => {
            console.log('The dialog was closed');
            this.isDialogOpen = false;
        });
    }
}
