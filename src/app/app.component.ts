import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoAngular';
  openAddPopup : boolean = false;
  name : any;
  price: any;
  description : any;
  checkStatus: any;
  checkUpdatedItemIndex : any;
  productItem = [
    {
      name: 'Product 1',
      price:200,
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam enim, officia adipisci rerum minima iusto ea repudiandae maiores. Rerum harum similique veniam adipisci tempora doloremque provident fugit facere illo!"
    },
    {
      name: 'Product 2',
      price:300,
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam enim, officia adipisci rerum minima iusto ea repudiandae maiores. Rerum harum similique veniam adipisci tempora doloremque provident fugit facere illo!"
    },
    {
      name: 'Product 3',
      price:100,
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam enim, officia adipisci rerum minima iusto ea repudiandae maiores. Rerum harum similique veniam adipisci tempora doloremque provident fugit facere illo!"
    },
    {
      name: 'Product 4',
      price:500,
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam enim, officia adipisci rerum minima iusto ea repudiandae maiores. Rerum harum similique veniam adipisci tempora doloremque provident fugit facere illo!"
    }
  ];

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  removeProduct(data: number) {
    this.productItem.splice(data, 1);
    localStorage.setItem('PRODUCTLIST',  JSON.stringify(this.productItem));

  }

  addProduct(){
    this.checkStatus = 0;
    this.openAddPopup = true;
    this.name = "";
    this.description = "";
  }

  submitProduct(name : string,price : number, desc : string){
    this.openAddPopup = false;
    let getObj = {
      name : name,
      price:price,
      detail : desc
    }
    this.productItem.push(getObj);
    localStorage.setItem('PRODUCTLIST',  JSON.stringify(this.productItem));
  }

  updateProduct(item : any){
    this.checkStatus = 1;
    this.openAddPopup = true;
    this.name = item.name;
    this.description = item.detail;
    this.checkUpdatedItemIndex = this.productItem.indexOf(item);
  }

  updateNewProduct(name : string,price: number, desc : string){
   for(let i=0;i< this.productItem.length ; i++){
    if(i == this.checkUpdatedItemIndex){
      this.productItem[i].name = name;
      this.productItem[i].price = price;
      this.productItem[i].detail = desc;
    }
   }
   this.openAddPopup = false;
  }
}
