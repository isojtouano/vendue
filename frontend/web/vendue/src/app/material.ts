import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatButton } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule],
    exports: [MatButtonModule, MatCheckboxModule],
})

export class MaterialModule {}