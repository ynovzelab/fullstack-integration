import React from 'react';
import Link from 'next/link';
import styles from "./SidebarLeft.module.scss";

const SidebarLeft = () => {
    const menu = [
        { id:1,link: "/", title: "Home", icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8z"/></svg>},
        { id:2,link: "/", title: "Projects", icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M572.1 82.38C569.5 71.59 559.8 64 548.7 64h-100.8c.2422-12.45 .1076-23.7-.156-33.02C447.3 13.63 433.2 0 415.8 0H160.2c-17.35 0-31.43 13.63-31.92 30.98C127.1 40.3 127.8 51.55 128.1 64H27.26C16.16 64 6.537 71.59 3.912 82.38C3.1 85.78-15.71 167.2 37.07 245.9c37.44 55.82 100.6 95.03 187.5 117.4c18.7 4.805 31.41 22.06 31.41 41.37C256 428.5 236.5 448 212.6 448H208c-26.51 0-47.99 21.49-47.99 48c0 8.836 7.162 16 15.1 16H399.1c8.836 0 15.1-7.164 15.1-16c0-26.51-21.48-48-47.99-48h-4.644c-23.86 0-43.36-19.5-43.36-43.35c0-19.31 12.71-36.57 31.41-41.37c86.96-22.34 150.1-61.55 187.5-117.4C591.7 167.2 572.9 85.78 572.1 82.38zM77.41 219.8C49.47 178.6 47.01 135.7 48.38 112h80.39C134.1 171.6 149.1 243.1 186.4 301.1C137.4 281.6 100.8 254.4 77.41 219.8zM370 146.3l-36.34 35.3l8.58 49.98c.8945 5.227-4.584 9.207-9.273 6.742l-44.85-23.57L243.3 238.3C238.6 240.8 233.1 236.8 234 231.6l8.578-49.98L206.3 146.3C202.5 142.6 204.6 136.2 209.8 135.4l50.26-7.344l22.43-45.43c2.346-4.75 9.119-4.75 11.46 0l22.43 45.43l50.08 7.316C371.7 136.1 373.8 142.6 370 146.3zM498.6 219.8c-23.44 34.6-59.94 61.75-109 81.22C426.9 243.1 441.9 171.6 447.2 112h80.39C528.1 135.7 526.5 178.7 498.6 219.8z"/></svg> },
        { id:3,link: "/", title: "Billing", icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M243.4 2.587C251.4-.8625 260.6-.8625 268.6 2.587L492.6 98.59C506.6 104.6 514.4 119.6 511.3 134.4C508.3 149.3 495.2 159.1 479.1 160V168C479.1 181.3 469.3 192 455.1 192H55.1C42.74 192 31.1 181.3 31.1 168V160C16.81 159.1 3.708 149.3 .6528 134.4C-2.402 119.6 5.429 104.6 19.39 98.59L243.4 2.587zM256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128zM127.1 416H167.1V224H231.1V416H280V224H344V416H384V224H448V420.3C448.6 420.6 449.2 420.1 449.8 421.4L497.8 453.4C509.5 461.2 514.7 475.8 510.6 489.3C506.5 502.8 494.1 512 480 512H31.1C17.9 512 5.458 502.8 1.372 489.3C-2.715 475.8 2.515 461.2 14.25 453.4L62.25 421.4C62.82 420.1 63.41 420.6 63.1 420.3V224H127.1V416z"/></svg> },
        { id:4,link: "/", title: "Team members", icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg> }
    ]
    return (
        <div className={styles.sidebar__content}>
            <nav className="sidebar__nav">
                <ul className={styles.sidebar__list}>
                    {
                        menu.map((item) => (
                    <li className={styles.nav__item} key={item.id}>
                        {item.icon}
                        <Link href={item.link}>
                            <a className={styles.nav__link}>
                               {item.title}
                            </a>
                        </Link>
                    </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
}

export default SidebarLeft;