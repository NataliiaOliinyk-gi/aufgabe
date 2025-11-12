import type { FC, ReactNode } from "react";

import styles from "./SectionLayout.module.css";

interface ISectionLayoutProps {
  children: ReactNode;
  title?: string;
}

const SectionLayout: FC<ISectionLayoutProps> = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;