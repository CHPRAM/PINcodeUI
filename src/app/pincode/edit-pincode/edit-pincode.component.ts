import { Component, OnInit , Inject} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Pincode} from '../../model/pincode.model';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-edit-pincode',
  templateUrl: './edit-pincode.component.html',
  styleUrls: ['./edit-pincode.component.css']
})
export class EditPincodeComponent implements OnInit {

  pincode: Pincode;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    const pincodeId = window.localStorage.getItem('editPincodeId');
    if (!pincodeId) {
      alert('Invalid action.');
      this.router.navigate(['list-pincode']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // age: ['', Validators.required],
      pincode: ['', Validators.required]
    });
    this.apiService.getPincodeById(+pincodeId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.apiService.updatePincode(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            alert('Pincode updated successfully.');
            this.router.navigate(['list-pincode']);
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
