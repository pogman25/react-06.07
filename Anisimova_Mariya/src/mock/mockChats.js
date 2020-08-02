const mockChats = [
  {
    id: '1', 
    messageList: [
      { author: 'user', text: 'привет 1', id: 1 },
      { author: 'user', text: 'привет 2', id: 2 },
    ],
    slug: '/chat/1',
    title: 'Чат 1',
  },
  {
    id: '2',
    messageList: [
      { author: 'user', text: 'привет 3', id: 3 },
      { author: 'user', text: 'привет 4', id: 4 },
    ],
    slug: '/chat/2',
    title: 'Чат 2',
  },
];

export default mockChats;

// {
//   "chats": [
//     {
//       "id": 1,
//       "title": "Чат 1",
//       "slug": "/chats/"
//     },
//     {
//       "id": 2,
//       "title": "Чат 2",
//       "slug": "/chats/"
//     }
//   ],
//   "messages": [
//     {
//       "id": 1,
//       "text": "Привет 1",
//       "author": "user 1",
//       "idUser": "1"
//     },
//     {
//       "id": 1,
//       "text": "Привет 2",
//       "author": "user 1",
//       "idUser": "1"
//     },
//     {
//       "id": 3,
//       "text": "Привет 3",
//       "author": "user 2",
//       "idUser": "2"
//     },
//     {
//       "id": 4,
//       "text": "Привет 4",
//       "author": "user 2",
//       "idUser": "2"
//     }
//   ]
// }