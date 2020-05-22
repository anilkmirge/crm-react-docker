// We can create a constant in our app that
// automatically uses the development or
// deployed URL for our API.  This ternary
// checks if we're running React locally
// and if so, it uses the localhost url for
// the API as well.
export const APIURL = 'https://glacial-sands-49555.herokuapp.com';
// window.location.hostname === 'localhost' ? 'https://glacial-sands-49555.herokuapp.com' : 'http://localhost:8000';
