import { NgModule } from '@angular/core';
import { MatListModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatMenuModule } from '@angular/material';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';

@NgModule({
    imports: [ MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatInputModule, 
        NgMatSearchBarModule, 
        MatMenuModule,
        MatCardModule,
        MatListModule
    ],
    exports: [ MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatInputModule, 
        NgMatSearchBarModule, 
        MatMenuModule,
        MatCardModule,
        MatListModule
    ],
})

export class MaterialModule {}