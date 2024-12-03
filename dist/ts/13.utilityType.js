/* Omit */
const user = {
    id: 1,
    name: 'tiger'
};
/* Pick */
const user2 = {
    id: 2,
    name: 'beom'
};
const user3 = {
    name: 'seon'
};
const user4 = {
    id: 1,
    name: 'tiger',
    email: 'tiger@naver.com'
};
// user4.id = 3; 
/* Required */
const user5 = {
    id: 1,
    name: 'tiger',
    email: 'tiger@naver.com',
    address: {
        lat: 20,
        long: 33.5
    }
};
const user6 = {
    name: 'tiger',
    address: {
        lat: 20,
        long: 33.5
    }
};
export {};
