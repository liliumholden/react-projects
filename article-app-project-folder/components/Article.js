import React, { use } from "react";
import styles from './Article.module.scss';


export default function () {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>

                <div className={styles.left}>

                    <div className={styles.img}>
                        <img className={styles.photo} src="https://cer.bo/wp-content/uploads/2023/08/Cerbo69791-min-scaled.jpg" alt="Cerbo People" />
                    </div>

                </div>

                <div className={styles.right}>
                    <h1 className={styles.h1}>People of Cerbo</h1>

                    <div className={styles.description}>
                        <p>First Paragrpah I know this doesn't have to be perfect looking and that it is just to use our knowledge but wow, please never hire me as a designer. Here is more text for this article's paragraph because I am writing an article. This article is about React and Cerbo and it is late and I am tired. </p>
                        
                    </div>

                    <a className="link" href="http://cer.bo/"> &gt; Learn More</a>
                </div>
            </div>
        </div>

    )
}
