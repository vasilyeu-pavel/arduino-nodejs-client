import config from "../config";

const defaultFunc = () => {};

export const isTokenLive = (isLivedCb = defaultFunc, isDiedCb = defaultFunc) => {
    const access_token = localStorage.getItem('access_token');

    fetch(`${config.url}/isGoogle?access_token=${access_token}`)
        .then(res => res.json())
        .then(({ isAuth, ...userInfo }) => {
            if (isAuth) {
                isLivedCb(userInfo)
            } else {
                isDiedCb();
            }
        });
};
