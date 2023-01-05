import React from 'react';

const Ruble = ({width, height, color, ...props}) => {
    return (
        <svg {...props} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 21C7.71667 21 7.479 20.904 7.287 20.712C7.09567 20.5207 7 20.2833 7 20V18H6C5.71667 18 5.479 17.904 5.287 17.712C5.09567 17.5207 5 17.2833 5 17C5 16.7167 5.09567 16.4793 5.287 16.288C5.479 16.096 5.71667 16 6 16H7V14H6C5.71667 14 5.479 13.904 5.287 13.712C5.09567 13.5207 5 13.2833 5 13C5 12.7167 5.09567 12.479 5.287 12.287C5.479 12.0957 5.71667 12 6 12H7V4C7 3.71667 7.09567 3.479 7.287 3.287C7.479 3.09567 7.71667 3 8 3H13.5C15.0333 3 16.3333 3.53333 17.4 4.6C18.4667 5.66667 19 6.96667 19 8.5C19 10.0333 18.4667 11.3333 17.4 12.4C16.3333 13.4667 15.0333 14 13.5 14H9V16H12C12.2833 16 12.521 16.096 12.713 16.288C12.9043 16.4793 13 16.7167 13 17C13 17.2833 12.9043 17.5207 12.713 17.712C12.521 17.904 12.2833 18 12 18H9V20C9 20.2833 8.90433 20.5207 8.713 20.712C8.521 20.904 8.28333 21 8 21ZM9 12H13.5C14.4667 12 15.2917 11.6583 15.975 10.975C16.6583 10.2917 17 9.46667 17 8.5C17 7.53333 16.6583 6.70833 15.975 6.025C15.2917 5.34167 14.4667 5 13.5 5H9V12Z" fill={color}/>
        </svg>
    );
}

export default Ruble;