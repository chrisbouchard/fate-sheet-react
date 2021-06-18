import { Link } from "@reach/router";
import { Dropdown, Menu } from "semantic-ui-react";

export function FullMenu(props) {
    const items = [
        { key: "1", text: "Party 1", value: "1" },
        { key: "2", text: "Party 2", value: "2" },
        { key: "3", text: "Party 3", value: "3" },
    ];

    return (
        <Menu>
            <Menu.Item header as={Link} to="/">
                Fate Sheet App
            </Menu.Item>
            <Menu.Item as={Link} to="characters">
                Characters
            </Menu.Item>
            <Menu.Item position="right">
                <Dropdown
                    selection
                    placeholder="Choose party..."
                    options={items}
                />
            </Menu.Item>
        </Menu>
    );
}
