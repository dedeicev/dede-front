import NavBarEmpresa from "../NavBarEmpresa";

interface Props {
    children: any,
}

export default function LayoutEmpresa(props: Props) {
    return(
        <>
            <header>
                <NavBarEmpresa/>
            </header>

            <main>
                {props.children}
            </main>

            <footer></footer>
        </>
    );
}