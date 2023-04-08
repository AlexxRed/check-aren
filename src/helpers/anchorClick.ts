import { MouseEvent } from 'react';

const anchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
const target = (e.target as HTMLAnchorElement)?.closest('a');
const href = target?.getAttribute('href');
const anchor: HTMLElement | null = href ? document.querySelector(href) : null;
    

    anchor?.scrollIntoView({behavior: 'smooth'});

    e.preventDefault();
    e.stopPropagation();
}

export default anchorClick;