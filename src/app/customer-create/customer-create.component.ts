import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { RideService } from '../services/ride.service';
import {Router,ActivatedRoute} from "@angular/router"



@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})


export class CustomerCreateComponent {

  custid:any
  isEdit:boolean=false


  constructor(private service:RideService,private route :Router,private router:ActivatedRoute){
    
    // console.log(this.router.snapshot.queryParams["custid"])

    this.service.isAuthenticated()
    this.custid=this.router.snapshot.queryParams["custid"]

    if(this.custid){

      this.isEdit=true
      // console.log(this.isEdit);
      this.initializeForm()

    }

  }

  initializeForm(){

    this.service.retrieveCustomer(this.custid).subscribe(data=>{

      this.customerForm.patchValue(data)
    })

  }

  
  customerForm = new FormGroup({

    "name": new FormControl("", Validators.required),

    "phone": new FormControl("", Validators.required),

    "email": new FormControl("", Validators.required),

    "vehicle_no": new FormControl("", Validators.required),

    "running_km": new FormControl("", Validators.required) 

  })

  handleSubmit(){
    let formData = this.customerForm.value

    if(this.isEdit){
      // logic for updating customer

      this.service.updateCustomer(this.custid,formData).subscribe(data=>{
        this.route.navigateByUrl("customers")
      })
    }
    else{
      // logic for createing customer
      this.service.createCustomer(formData).subscribe((data:any)=>{
        // console.log(data);
  
        this.route.navigateByUrl(`worksummary/${data.id}`)
        
      })
    }

    
    
  }
}
