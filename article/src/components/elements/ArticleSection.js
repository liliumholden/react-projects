function ArticleSection({ position, children }) {
    const isLeft = position === 'left';
    const sectionStyle = isLeft ? styles.left : styles.right;
    return <div className={sectionStyle}>{children}</div>;
  }
  