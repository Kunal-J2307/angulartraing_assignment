import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProducttabelComponent } from "./producttabel/producttabel.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";


@NgModule({
  declarations:[SearchbarComponent,ProducttabelComponent],
  imports:[BrowserModule],
  exports:[SearchbarComponent, ProducttabelComponent]
})

export class ProductModule{}
