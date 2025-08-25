const jwt_secret = 'sdfsdfsdasdasd';

const users = [
    {
        username: 'test',
        password: '123456',
    },
    {
        username: 'admin',
        password: 'password123',
    }
];

module.exports = {
    users: users,
    jwt_secret: jwt_secret,
}