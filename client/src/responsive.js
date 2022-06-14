import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 400px) {
            ${props}
        }
    `;
};
export const miniTab = (props) => {
    return css`
        @media only screen and (min-width: 401px) and (max-width: 600px) {
            ${props}
        }
    `;
};

export const tab = (props) => {
    return css`
        @media only screen and (min-width: 601px) and (max-width: 960px) {
            ${props}
        }
    `;
};
export const laptop = (props) => {
    return css`
        @media only screen and (min-width: 961px) and (max-width: 1280px) {
            ${props}
        }
    `;
};
