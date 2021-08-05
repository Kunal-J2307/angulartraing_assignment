import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'producttabel-comp',
  templateUrl: './producttabel.component.html',
  styleUrls: ['./producttabel.component.css']
})
export class ProducttabelComponent implements OnInit {

  @Input()
  dataSet:Array<any> = [];

  lastCategory:string;
  setCategoryRow:any = {}
  productCategories:Array<any> = []
  constructor() {
    this.lastCategory="";
  }

  ngOnInit(): void {
    this.dataSet.forEach(data=>{
      if(data.category !== this.lastCategory){
        this.setCategoryRow = {
          name: ( this.lastCategory = data.category ),
          item: []
        };
        this.productCategories.push(this.setCategoryRow);
      }
      this.setCategoryRow.item.push({
        name: data.name,
				stocked: data.stocked,
				price: data.price
      });
    });
  }

}
