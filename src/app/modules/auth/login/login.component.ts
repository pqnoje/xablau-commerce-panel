import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private cartService: CartService) { 
    this.initForm()
  }

  ngOnInit(): void {
    
  }

  private initForm(){
    this.form = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit(formValue: Object){
    this.authService.login(formValue).subscribe(isAuthenticated => {
      if(isAuthenticated){
        
      }
    })
  }
}