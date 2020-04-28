import { Component, OnInit } from '@angular/core';
import { NewsService, News } from './news.service'

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  constructor(private newsSvc:NewsService) { }
  
  ngOnInit(): void {
    this.newsItems = this.newsSvc.getNewsItems()
  }

  selectedNewsId: number
  newsItems: News[] = []

  expandNews(id:number) {
    this.selectedNewsId = id
    return false
  }
}
