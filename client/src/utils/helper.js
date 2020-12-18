import Cookies from 'js-cookie';


//set cookie with 4 days expiration time
export const setCookie = (key, value) => {
    if (window !== 'undefined') {
        Cookies.set(key, value, {
            expires: 4
        });
    }
}

//get cookie
export const getCookie = (key) => {
    if (window !== 'undefined') {
        return Cookies.get(key);
    }
}

// remove cookie
export const removeCookie = (key) => {
    if (window !== 'undefined') {
        Cookies.remove(key)
    }
}