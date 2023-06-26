import NavBar from "../NavBar";
import Footer from "../footer";

interface Props {
    children: any,
}

export default function LayoutCliente(props: Props) {
    return(
        <div className="w-full flex flex-col justify-between">
            <header className="">
                <NavBar/>
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