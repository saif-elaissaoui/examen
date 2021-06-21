import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Monumenet } from '../models/monument';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-monument',
  templateUrl: './monument.page.html',
  styleUrls: ['./monument.page.scss'],
})
export class MonumentPage implements OnInit {

  
  monuments: Observable<any> ;

  constructor(private fs:FirebaseService) { }

  ngOnInit() {
    this.fs.getApi().subscribe(data => {
      this.monuments = data;
    })
  }

}
