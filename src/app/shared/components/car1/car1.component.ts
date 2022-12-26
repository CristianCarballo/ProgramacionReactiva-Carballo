import { Component, OnInit } from '@angular/core';
import { TrafficLightService } from '../../../services/traffic-light.service';

@Component({
  selector: 'app-car1',
  templateUrl: './car1.component.html',
  styleUrls: ['./car1.component.scss']
})
export class Car1Component implements OnInit {

  constructor( public trafficLightService: TrafficLightService) {
  }

  ngOnInit(): void {
  }

}