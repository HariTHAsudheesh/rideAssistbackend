import { Component, Input,OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-workcreate',
  templateUrl: './workcreate.component.html',
  styleUrls: ['./workcreate.component.css']
})
export class WorkCreateComponent implements OnInit{
  @Input() custId:any
  workForm=new FormGroup({
    title:new FormControl("",Validators.required),
    description:new FormControl("",Validators.required),
    amount:new FormControl("",Validators.required),
  })

  constructor(private service:RideService){}
  ngOnInit(){
    console.log("insideworkCreateComponent:",this.custId)
  } 

  handleSubmit(){
    let formData=this.workForm.value
    console.log(formData)
    this.service.createWork(this.custId,formData).subscribe(data=>{ 
      console.log(data)
      this.service.refreshWorkList()
      this.workForm.reset()
    })
  }
}