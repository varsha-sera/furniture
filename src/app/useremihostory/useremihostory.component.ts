import { Component, OnInit } from '@angular/core';
import { EmiService } from '../services/emi.service';

@Component({
  selector: 'app-useremihostory',
  templateUrl: './useremihostory.component.html',
  styleUrls: ['./useremihostory.component.css']
})
export class UseremihostoryComponent implements OnInit {

  constructor(private emiService: EmiService) { }

  emis:any;
  ngOnInit(): void {
    this.emiService.allEmiHistory().subscribe(data => {
      this.emis=data;
    });
  }

}
