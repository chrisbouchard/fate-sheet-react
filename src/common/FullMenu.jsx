import { Link } from "@reach/router";
import { Button, Container, Dropdown, Image, Menu } from "semantic-ui-react";

import { useUser } from "../api/User";

export function FullMenu() {
    const { user, setUser } = useUser();

    return (
        <Menu borderless attached="bottom">
            <Container>
                <Menu.Item header as={Link} to="/">
                    Fate Sheet App
                </Menu.Item>

                <Menu.Menu position="right">
                    {user ? (
                        <Dropdown
                            item
                            floating
                            trigger={
                                <>
                                    <Image
                                        alt={user.name}
                                        avatar
                                        spaced="right"
                                        src="https://www.gravatar.com/avatar/d9966544dacbebd3ac5560c222038f32"
                                    />
                                    {user.name}
                                </>
                            }
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    icon="setting"
                                    content="Settings"
                                />
                                <Dropdown.Item
                                    icon="sign-out"
                                    content="Log Out"
                                    onClick={() => setUser(null)}
                                />
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <>
                            <Menu.Item>
                                <Button
                                    primary
                                    icon="sign-in"
                                    content="Log In"
                                    onClick={() =>
                                        setUser({
                                            id: 1,
                                            name: "Chris",
                                        })
                                    }
                                />
                            </Menu.Item>
                        </>
                    )}
                </Menu.Menu>
            </Container>
        </Menu>
    );
}
