const defaultOptions = {
    timeout: 1000,
    condition: true,
    data: [{ name: 'tiger', age: 20 }]
};
function delayP(options) {
    const { condition, data, timeout } = { ...defaultOptions, ...options };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condition) {
                resolve(data);
            }
            else {
                reject();
            }
        }, timeout);
    });
}
const END_POINT = 'https://jsonplaceholder.typicode.com/users';
async function fetchData(url) {
    // get 통신
    const response = await fetch(url);
    const data = await response.json();
    // 데이터 리턴 
    console.log(data);
    return data;
}
const data = fetchData(END_POINT);
function render() {
    // 데이터 받아오기 
    // 랜더링 
}
export {};
