import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule } from '@angular/material';

const comps = [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule
];

@NgModule({
    declarations: [

    ],
    imports: [
        comps
    ],
    exports: [
        comps
    ],
    providers: [],
    bootstrap: []
})
export class MaterialModule { }
