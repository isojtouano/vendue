import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatMenuModule } from '@angular/material';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';

@NgModule({
    imports: [ MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatInputModule, 
        NgMatSearchBarModule, 
        MatMenuModule,
        MatCardModule
    ],
    exports: [ MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatInputModule, 
        NgMatSearchBarModule, 
        MatMenuModule,
        MatCardModule
    ],
})

export class MaterialModule {}