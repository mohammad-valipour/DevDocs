import {HEADER} from "@/constants/header.constants";
import {Text} from "@/components/ui";
import NavItems from "@/components/layout/header/navItems";
import ActionItems from "@/components/layout/header/actionItems";

export default function Header() {
    const {logo, navItems, actionItems} = HEADER;

    return (
        <header className="w-full border-b border-border">
            <div className="container mx-auto flex justify-between items-center py-5">
                {/*    Logo     */}
                <Text tag="h5"
                      variant="h5"
                      color="primary"
                      weight="medium"
                      align="right"
                >
                    {logo}
                </Text>

                {/*    Navbar Items     */}
                <NavItems navbarItems={navItems}/>

                {/*    Action Items     */}
                <ActionItems actionItems={actionItems}/>
            </div>
        </header>
    );
}

