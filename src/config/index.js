export default {
    development: {
        url: 'http://localhost:3000',
        host: 'localhost:3000',
        socketUrl: 'ws://localhost:3000'
    },
    production: {
        url: 'https://powerful-falls-48878.herokuapp.com',
        host: 'powerful-falls-48878.herokuapp.com',
        socketUrl: 'wss://powerful-falls-48878.herokuapp.com'
    }
}['production'];
