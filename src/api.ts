import { Tag, User, Post, Comment } from "types";
import axios from 'axios';


function getRandomSubarray(arr: any[], size: number) {
  var shuffled = arr.slice(0), i = arr.length, temp, index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}

// @ts-ignore
// eslint-disable-next-line 
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

const userSeeds = [...Array(20)].map((_, i) => `${i}`)
const tagsNames = ['Fatty', 'Smelly cat', 'Awesome', 'Cat', 'Hurray', 'Angry', 'Pathetic', 'Cute', 'Pretty', 'Awwww', 'Badass']
const possibleComments = [
  'I love him!',
  'Karate!',
  'His eyes <3',
  'Nicee',
  'Nicee one',
  'Heyy Awesome Picc',
  'Lool',
  '>:|',
  'It s just like you!',
  'Love it',
  'Haha cooll', 'Omg', '<3 <3 <3', '❤❤❤❤❤❤❤❤❤❤❤', '❤❤❤❤', '❤❤', 'One of a kind!', 'I miss him!', 'Aww', 'woww', '🐈❤',
  'Is that cat even real!?',
  'OMG ❤',
  'Cat Love! 😻',
  '😻',
  '🥰😻',
  'Just lovely'
]
const possiblePostMessage = [
  'One of him',
  'Smelly cat',
  '<3',
  'Lots of love to him',
  'Admiral McKittens',
  'Mortimer Smith',
  'Cat Stevens',
  'Nyan',
  'Cleopatra',
  'Katy Kittens',
  'John McCat',
  'Meow Meowinsky',
  'Phoebe Buffay',
  'Angry Cat',
  'McMuffins',
  'Eat sleep play, repeat',
  'Octocat',
  'Ruffus', 'Itchy', 'Chloe', 'Missy❤', '',
  '❤'
]
const randomId = (): string => {
  return Math.round(Math.random() * 100000).toString();
}

const tags: Tag[] = tagsNames.map(name => ({
  id: randomId(),
  name: name
}));

class Api {

  /**
   * Fake api call. Use random endpoints to fetch dummy data
   */
  static async getPosts() {

    const users: User[] = [];
    const posts: Post[] = [];

    for (let i = 0; i < 10; i++) {
      const userObj = (await axios.get(`https://randomuser.me/api/?seed=${userSeeds[Math.round(Math.random() * userSeeds.length - 1)]}`)).data.results[0];
      const user: User = {
        id: userObj.login.username,
        name: userObj.name.first.capitalize() + ' ' + userObj.name.last.capitalize(),
        email: userObj.email,
        img: userObj.picture.large
      };
      users.push(user);

    }

    for (let i = 0; i < users.length; i++) {
      const user = users[i % users.length];

      const commentUsers = getRandomSubarray(users, Math.round(Math.random() * 7) + 1);
      const comments: Comment[] = [];

      for (let i = 0; i < commentUsers.length; i++) {
        const comment: Comment = {
          id: randomId(),
          owner: commentUsers[i],
          message: possibleComments[Math.round(Math.random() * (possibleComments.length - 1))]
        }
        comments.push(comment);
      }

      const post: Post = {
        id: randomId(),
        user: user,
        img: `https://cataas.com/cat?${performance.now()}`,
        tags: getRandomSubarray(tags, Math.round(Math.random() * 3) + 1),
        message: possiblePostMessage[Math.round(Math.random() * (possibleComments.length - 1))],
        comments: comments
      }

      posts.push(post);

    };

    return posts;

  }
}

export default Api;