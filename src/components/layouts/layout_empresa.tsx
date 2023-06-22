import { useDisclosure } from "@chakra-ui/react";
import NavBarEmpresa from "../NavBarEmpresa";
import Footer from "../footer";

interface Props {
    children: any,
}

export default function LayoutEmpresa(props: Props) {
    return(
        <div className="w-full h-screen flex flex-col justify-between">
            <header className="">
                <NavBarEmpresa/>
            </header>

            <main className="w-full h-full flex flex-col items-center">
                {props.children}
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
}