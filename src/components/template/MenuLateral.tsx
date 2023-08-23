import { IconAjustes, IconHome } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside>
            <aside>
                <ul>
                    <MenuItem url="/" texto="Home" icone={IconHome} />
                    <MenuItem url="/ajustes" texto="Ajustes" icone={IconAjustes} />

                </ul>
            </aside>
        </aside>
    )
}