import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post.interface';

@Injectable({
	providedIn: 'root',
})
export class PostsService {
	private readonly POST_URL = 'https://jsonplaceholder.typicode.com/posts';

	constructor(private readonly httpClient: HttpClient) {}

	public getPosts(): Observable<IPost[]> {
		return this.httpClient.get<IPost[]>(this.POST_URL);
	}

	public getPostById(postId: string): Observable<IPost> {
		return this.httpClient.get<IPost>(`${this.POST_URL}/${postId}`);
	}
}
