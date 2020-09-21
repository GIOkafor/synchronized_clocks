import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Synchronized Clocks';
  time = new Date();
  time_form = this.fb.group({
  	'new_time': ["", Validators.required]
  });

  constructor(
  	private fb: FormBuilder
  ){}

  ngOnInit(){
  	setInterval(() => {
  		this.getTime();
  	}, 1000);
  }

  getTime(){
  	const time = this.time ? new Date(this.time.getTime() + 1000) : new Date();
  	this.time = time;
  }

  setTime(){
  	const new_time = this.time_form.controls['new_time'].value;
  	this.time = new Date(new_time);
  }
}
