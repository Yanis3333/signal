import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-point',
  standalone: true,
  imports: [],
  templateUrl: './point.component.html',
  styleUrl: './point.component.scss'
})
export class PointComponent {
  i!: number;
  indexes:number[] = [0,1,2,3,4];
  emptyPoint:string = '/src/assets/rond.png'
  fullPoint:string = '/src/assets/rond_plein.png'

  quantity:WritableSignal<number> = signal(2);



}
