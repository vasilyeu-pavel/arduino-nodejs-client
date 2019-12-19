import { isTokenLive } from './isTokenLive';

const isDiedTokenCb = () => window.location.href = '/';

export const isVisiblePage = () => {
    let state;
    let visibilityChange;

    if (typeof document.hidden !== 'undefined') {
        visibilityChange = 'visibilitychange';
        state = 'visibilityState';
    } else if (typeof document.mozHidden !== 'undefined') {
        visibilityChange = 'mozvisibilitychange';
        state = 'mozVisibilityState';
    } else if (typeof document.msHidden !== 'undefined') {
        visibilityChange = 'msvisibilitychange';
        state = 'msVisibilityState';
    } else if (typeof document.webkitHidden !== 'undefined') {
        visibilityChange = 'webkitvisibilitychange';
        state = 'webkitVisibilityState';
    }

    document.addEventListener(visibilityChange, async () => {
        if (document[state] === 'visible') {
            try {
                isTokenLive(undefined, isDiedTokenCb);
            } catch (e) {
                console.log(e);
            }
        }
    });
};
