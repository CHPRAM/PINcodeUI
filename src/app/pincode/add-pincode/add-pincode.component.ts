import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-add-pincode',
  templateUrl: './add-pincode.component.html',
  styleUrls: ['./add-pincode.component.css']
})
export class AddPincodeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      /*age: ['', Validators.required],*/
      pincode: ['', Validators.required]
    });

  }

  onSubmit() {
    this.apiService.createPincode(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-pincode']);
      });
  }

}
