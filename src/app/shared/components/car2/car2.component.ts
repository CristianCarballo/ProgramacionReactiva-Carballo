import { Component, OnInit } from '@angular/core';
import { TrafficLightService } from 'src/app/services/traffic-light.service';

@Component({
  selector: 'app-car2',
  templateUrl: './car2.component.html',
  styleUrls: ['./car2.component.scss']
})
export class Car2Component implements OnInit {

  constructor( public trafficLightService: TrafficLightService) {
  }

  ngOnInit(): void {
  }

}
