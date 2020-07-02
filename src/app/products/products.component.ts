import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() items = [1, 2, 3, 4, 5];
  constructor( ) {

   }

  ngOnInit() {
  }

}
