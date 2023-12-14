/* soph_code.js */

// This code emulates a social media platform where users can post, like, and comment on posts.

// Data structure for a Post
class Post {
  constructor(id, user, content) {
    this.id = id;
    this.user = user;
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  comment(user, text) {
    const comment = { user, text };
    this.comments.push(comment);
  }
}

// Data structure for a User
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.posts = [];
  }

  createPost(content) {
    const post = new Post(this.posts.length + 1, this.name, content);
    this.posts.push(post);
  }

  likePost(postId) {
    const post = this.posts.find(post => post.id === postId);
    if (post) {
      post.like();
    }
  }

  commentOnPost(postId, text) {
    const post = this.posts.find(post => post.id === postId);
    if (post) {
      post.comment(this.name, text);
    }
  }
}

// Create some users
const user1 = new User("John Doe", "johndoe@example.com");
const user2 = new User("Jane Smith", "janesmith@example.com");

// User 1 creates a post
user1.createPost("Hello world!");

// User 2 likes User 1's post
user2.likePost(1);

// User 2 comments on User 1's post
user2.commentOnPost(1, "Nice post!");

// User 1's second post
user1.createPost("I'm loving coding!");

// User 2 likes User 1's second post
user2.likePost(2);

// Display posts, likes, and comments
user1.posts.forEach(post => {
  console.log(`Post ${post.id} by ${post.user}: ${post.content}`);
  console.log(`Likes: ${post.likes}`);
  console.log("Comments:");
  post.comments.forEach(comment => {
    console.log(`- ${comment.user}: ${comment.text}`);
  });
  console.log("");
});