import { of } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostsComponent } from './posts.component';

fdescribe('Posts Component', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;

  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        body: 'body-1',
        title: 'title-1',
      },

      {
        id: 2,
        body: 'body-2',
        title: 'title-2',
      },

      {
        id: 3,
        body: 'body-3',
        title: 'title-3',
      },
    ];

    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);
    component = new PostsComponent(mockPostService);
  });

  describe('delete()', () => {
    let postToDelete: any;

    beforeEach(() => {
      postToDelete = {
        id: 2,
        body: 'body-2',
        title: 'title-2',
      };

      component.posts = [...POSTS];
      mockPostService.deletePost.and.returnValue(of(true));
    });

    it('It should delete a Post from the posts', () => {
      component.delete(postToDelete);
      expect(component.posts.length).toBe(2);
    });

    it('It should delete the actual selected Post from posts', () => {
      component.delete(postToDelete);
      component.posts.map((singlePost) => {
        expect(singlePost).not.toEqual(postToDelete);
      });
    });
  });
});
