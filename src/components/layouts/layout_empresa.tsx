import { useDisclosure } from "@chakra-ui/react";
import NavBarEmpresa from "../NavBarEmpresa";

interface Props {
    children: any,
}

export default function LayoutEmpresa(props: Props) {

    const { isOpen, onOpen, onClose } = useDisclosure()


    return(
        <>
            <header className="">
                <NavBarEmpresa/>
            </header>

            <main className="w-full h-full flex flex-col items-center">
                {props.children}
            </main>

            <footer></footer>
        </>
    );
}