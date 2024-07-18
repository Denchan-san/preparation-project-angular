import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPost();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post(
      'https://ng-complete-guide-d3567-default-rtdb.europe-west1.firebasedatabase.app/post.json',
      postData
    ).subscribe(responseData => {
      console.log(responseData);
    }); // .json is exclusive only for Firebase
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPost();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPost() {
    this.http
    .get('https://ng-complete-guide-d3567-default-rtdb.europe-west1.firebasedatabase.app/post.json')
    .pipe(map(responseData => {
      const postsArray = [];
      for(const key in responseData) {
        if(responseData.hasOwnProperty(key)) {
          postsArray.push({...responseData[key], id: key})
        }
      }
      return postsArray;
    }))
    .subscribe( posts => {
      console.log(posts);
    });
  }
}
