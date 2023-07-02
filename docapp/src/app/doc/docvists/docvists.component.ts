import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docvists',
  templateUrl: './docvists.component.html',
  styleUrls: ['./docvists.component.css'],
})
export class DocvistsComponent implements OnInit {
  public docName = '';
  ngOnInit() {
    this.docName = JSON.parse(localStorage.getItem('docName') || '');
  }
}
