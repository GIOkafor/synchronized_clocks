import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit, AfterViewInit {

  @Input() date: Date;
  hours: string;
  minutes: string;
  seconds: number;
  ampm: string;


  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  	setInterval(() => {
  		this.updateDate(this.date);
  	}, 1000)
  }

  updateDate(date){
  	const hours = date.getHours();
  	this.ampm = hours >= 12 ? 'PM' : 'AM';

  	//TODO: move to get hours func()
  	this.hours = this.getHours(hours);/*
  	this.hours = this.hours ? this.hours : 12;
  	this.hours = this.hours < 10 ? '0' + this.hours : this.hours;*/

  	//TODO: move to getMinutes func()
  	const minutes = date.getMinutes();
  	this.minutes = minutes < 10 ? '0' + minutes : minutes.toString();

  	//TODO: get seconds func()
  	const seconds = date.getSeconds();
  	this.seconds = seconds < 10 ? '0' + seconds : seconds.toString();
  }

  getHours(hours){
    var updated_hours = hours % 12;
    updated_hours = updated_hours ? updated_hours : 12;
    return updated_hours < 10 ? '0' + updated_hours : updated_hours.toString();
  }
}
