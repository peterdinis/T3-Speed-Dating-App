import { ReactNode } from "react";
import Seo from "./Seo";

interface ILayoutProps {
    children?: ReactNode
}

const Layout: React.FC<ILayoutProps> = ({children}: ILayoutProps) => {
    return (
        <>
         <Seo />
         {children}
        </>
    )
}

export default Layout