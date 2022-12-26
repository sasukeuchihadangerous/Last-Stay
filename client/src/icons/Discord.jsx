import React from 'react';

const Discord = ({width, height, color, ...props}) => {
    return (
        <svg {...props} width={width} height={height} viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.7808 13.769C46.345 12.1673 42.625 11.0048 38.75 10.3331C38.716 10.332 38.6822 10.3384 38.651 10.3518C38.6198 10.3652 38.5918 10.3853 38.5692 10.4106C38.1042 11.2631 37.5617 12.374 37.2 13.2265C33.0899 12.6065 28.9101 12.6065 24.8 13.2265C24.4384 12.3481 23.8959 11.2631 23.405 10.4106C23.3792 10.359 23.3017 10.3331 23.2242 10.3331C19.3492 11.0048 15.655 12.1673 12.1934 13.769C12.1675 13.769 12.1417 13.7948 12.1159 13.8206C5.08918 24.3348 3.15168 34.5648 4.10752 44.6915C4.10752 44.7431 4.13335 44.7948 4.18502 44.8206C8.83502 48.2306 13.3042 50.2973 17.7217 51.6665C17.7992 51.6923 17.8767 51.6665 17.9025 51.6148C18.9359 50.194 19.8659 48.6956 20.6667 47.1198C20.7184 47.0165 20.6667 46.9131 20.5634 46.8873C19.0909 46.319 17.6959 45.6473 16.3267 44.8723C16.2234 44.8206 16.2234 44.6656 16.3009 44.5881C16.585 44.3815 16.8692 44.149 17.1534 43.9423C17.205 43.8906 17.2825 43.8906 17.3342 43.9165C26.2209 47.9723 35.805 47.9723 44.5884 43.9165C44.64 43.8906 44.7175 43.8906 44.7692 43.9423C45.0533 44.1748 45.3375 44.3815 45.6217 44.614C45.725 44.6915 45.725 44.8465 45.5958 44.8981C44.2525 45.699 42.8317 46.3448 41.3592 46.9131C41.2559 46.939 41.23 47.0681 41.2559 47.1456C42.0825 48.7215 43.0125 50.2198 44.02 51.6406C44.0975 51.6665 44.175 51.6923 44.2525 51.6665C48.6958 50.2973 53.165 48.2306 57.815 44.8206C57.8667 44.7948 57.8925 44.7431 57.8925 44.6915C59.0292 32.989 56.0067 22.8365 49.8842 13.8206C49.8583 13.7948 49.8325 13.769 49.7808 13.769ZM22.01 38.5173C19.3492 38.5173 17.1275 36.0631 17.1275 33.0406C17.1275 30.0181 19.2975 27.564 22.01 27.564C24.7484 27.564 26.9184 30.044 26.8925 33.0406C26.8925 36.0631 24.7225 38.5173 22.01 38.5173ZM40.0159 38.5173C37.355 38.5173 35.1334 36.0631 35.1334 33.0406C35.1334 30.0181 37.3033 27.564 40.0159 27.564C42.7542 27.564 44.9242 30.044 44.8983 33.0406C44.8983 36.0631 42.7542 38.5173 40.0159 38.5173Z" fill={color}/>
        </svg>
    );
}

export default Discord;
