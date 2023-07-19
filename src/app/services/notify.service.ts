import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private toast:ToastrService) { }

  showSuccess(message:any,title:any){
    this.toast.success(message,title);
  }

  showError(message:any,title:any){
    this.toast.error(message,title);
  }

  showWarning(message:any,title:any){
    this.toast.warning(message,title);
  }

  showInfo(message:any,title:any){
    this.toast.info(message,title);
  }
}
