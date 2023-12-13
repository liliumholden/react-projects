import React, { use } from "react";
import Photo from './elements/Photo';
import SimpleText from "./elements/SimpleText";
import styles from './Article.module.scss';
import SimpleLink from "./elements/SimpleLink";


export default function () {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>

                <div className={styles.left}>
                    <Photo src="https://cer.bo/wp-content/uploads/2023/08/Cerbo69791-min-scaled.jpg" alt="Cerbo People"></Photo>
                </div>

                <div className={styles.right}>
                    <h1 className={styles.h1}>People of Cerbo</h1>

                    <SimpleText>This component now uses children instead of props. Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text Paragraph text <br /> More text More text More text More text More text More text More text More text</SimpleText>

                    <SimpleLink to="http://cer.bo/">Learn More</SimpleLink>
                </div>
            </div>
        </div>

    )
}

