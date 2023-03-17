import { FC, ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export const MainPanel: FC<Props> = ({ children }) =>
  <>
    <main className="main01">
      {children}
    </main>
    <style jsx>{`
      .main01 {
        margin: 32px;
      }
  `}</style>
  </>
