const mockChats = [
  {
    id: "1",
    messageList: [
      { author: "user", text: "привет 1", id: 1 },
      { author: "user", text: "как дела? 2", id: 2 },
    ],
    to: "/chats/1",
    title: "Чат 1",
  },
  {
    id: "2",
    messageList: [
      { author: "user", text: "как дела? 3", id: 3 },
      { author: "user", text: "как дела? 4", id: 4 },
    ],
    to: "/chats/2",
    title: "Чат 2",
  },
  {
    id: "3",
    messageList: [
      { author: "user", text: "привет 1", id: 1 },
      { author: "user", text: "как дела? 4", id: 4 },
    ],
    to: "/chats/3",
    title: "Чат 3",
  },
];

export default mockChats;
