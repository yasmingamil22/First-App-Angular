import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  photos:any[]=[
    {photoSrc:"../../assets/images/port1.png"},
    {photoSrc:"../../assets/images/port2.png"},
    {photoSrc:"../../assets/images/port3.png"},
    {photoSrc:"../../assets/images/port1.png"},
    {photoSrc:"../../assets/images/port2.png"},
    {photoSrc:"../../assets/images/port3.png"},
  ]


   imgUrl:string='';
  openModel(imgUrl:string){
   this.imgUrl=imgUrl;
  }

  onClickOutsideModal(event: MouseEvent): void {
    console.log(event.target)
    if ((event.target as HTMLElement).classList.contains('model')) {
      this.imgUrl = '';
    }
  }

}
