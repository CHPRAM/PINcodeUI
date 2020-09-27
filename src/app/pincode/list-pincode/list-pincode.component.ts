import { Component, OnInit , Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Pincode} from '../../model/pincode.model';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-list-pincode',
  templateUrl: './list-pincode.component.html',
  styleUrls: ['./list-pincode.component.css']
})
export class ListPincodeComponent implements OnInit {

  pincodes: Pincode[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getPincodes()
      .subscribe( data => {
        this.pincodes = data.result;
      });
  }

  deletePincode(pincode: Pincode): void {
    this.apiService.deletePincode(pincode.id)
      .subscribe( data => {
        this.pincodes = this.pincodes.filter(u => u !== pincode);
      });
  }

  editPincode(pincode: Pincode): void {
    window.localStorage.removeItem('editPincodeId');
    window.localStorage.setItem('editPincodeId', pincode.id.toString());
    this.router.navigate(['edit-pincode']);
  }

  addPincode(): void {
    this.router.navigate(['add-pincode']);
  }
}
