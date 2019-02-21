import { NgModule } from '@angular/core';
import { MatPaginatorModule, MatDialogModule, MatGridListModule, MatListModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatMenuModule } from '@angular/material';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';

@NgModule({
    imports: [ MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatInputModule, 
        NgMatSearchBarModule, 
        MatMenuModule,
        MatCardModule,
        MatListModule,
        MatGridListModule,
        MatDialogModule,
        MatPaginatorModule,
    ],
    exports: [ MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatInputModule, 
        NgMatSearchBarModule, 
        MatMenuModule,
        MatCardModule,
        MatListModule,
        MatGridListModule,
        MatDialogModule,
        MatPaginatorModule,
    ],
})

export class MaterialModule {}