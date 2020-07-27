import { v4 as uuidv4 } from 'uuid';

const mockProfile = [
    {
        id: `${uuidv4()}`,
        name: "Николай",
        surname: "Базлов",
        slug: "/profile",
        title: "Ваш профиль"
    },
];

export default mockProfile;