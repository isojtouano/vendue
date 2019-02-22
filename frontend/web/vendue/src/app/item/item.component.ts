import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Data {
  result: boolean,
  message: string,
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  addItemForm: FormGroup;
  private name: string;
  private description: string;
  private category: string;
  private reserve: number;

  constructor(private item: ItemService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addItemForm = this.formBuilder.group({
      name: [ null, Validators.compose([]) ],
      description: [ null, Validators.compose([]) ],
      category: [ null, Validators.compose([]) ],
      reserve: [ null, Validators.compose([]) ],
    })
  }

  addItem() {
    this.name = this.addItemForm.value.name;
    this.description = this.addItemForm.value.description;
    this.category = this.addItemForm.value.category;
    this.reserve = this.addItemForm.value.reserve;
    

    this.item.addItem(this.name, this.description, this.category, this.reserve).subscribe((data: Data) => {
      if(data.result){
        console.log('Item addition success');
      }else{
        console.log('Item addition error');
      }
    });
  }

}
