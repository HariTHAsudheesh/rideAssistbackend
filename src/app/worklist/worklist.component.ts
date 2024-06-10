import { Component, Input, OnInit } from '@angular/core';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.css']
})
export class WorkListComponent implements OnInit {
  
  works:any
  total:any

  @Input() custId:any

  constructor(private service:RideService){

    this.service.refreshRequired.subscribe(data=>{

      this.ngOnInit()})
    }
    ngOnInit(){
      console.log("inside wrk list",this.custId);
      this.service.retrieveCustomer(this.custId).subscribe((data:any)=>{
        console.log(data)
        this.works=data?.works
        console.log(this.works)
        this.total=data?.work_total
      
      })
    }    
}
