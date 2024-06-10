import { Component } from '@angular/core';
import { RideService } from '../services/ride.service';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customers:any

  constructor(private service:RideService){

    // this.service.getCustomer().subscribe(data=>this.customers=data)
    this.ngOninit()

    this.service.isAuthenticated()


  }
  ngOninit(){
    this.service.getCustomers().subscribe(data=>this.customers=data)

  }

  handleDelete(id:any){
    this.service.deleteCustomer(id).subscribe(data=>{
      // console.log(data);
      this.ngOninit()
      
    })
  }

  generatePdf(id:any){
    let customerDetail=this.customers.find((cust:any)=>cust.id==id)
    let body=[]
    for (let work of customerDetail.work){
      body.push([work.title,work.description,work.total])
    }
    const doc = new jsPDF()
    autoTable(doc, {
      head: [['Title','Description','Amount']],
      body:body,

    })
    
    doc.save('table.pdf')

  }

}