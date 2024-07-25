import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { catchError, map } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http
     .post<{ name: string }> (
      'https://ng-complete-guide-d3567-default-rtdb.europe-west1.firebasedatabase.app/post.json',
       postData
     )
     .subscribe(responseData => {
       console.log(responseData);
    },error => {
      this.error.next(error.message);
    }); // .json is exclusive only for Firebase
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print','pretty');
    searchParams = searchParams.append('custom','key');

    return this.http
    .get<{ [key: string] : Post }>('https://ng-complete-guide-d3567-default-rtdb.europe-west1.firebasedatabase.app/post.json',
      {
        headers: new HttpHeaders({'Custom-Header' : 'hi'}),
        params: searchParams
      }
    )
    .pipe(
      map(responseData => {
        const postsArray: Post[] = [];
        for(const key in responseData) {
         if(responseData.hasOwnProperty(key)) {
           postsArray.push({...responseData[key], id: key})
          }
        }
        return postsArray;
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    );
  }

  deletePosts() {
    return this.http
    .delete(
      'https://ng-complete-guide-d3567-default-rtdb.europe-west1.firebasedatabase.app/post.json'
    );
  }
}