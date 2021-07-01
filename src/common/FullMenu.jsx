import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "@reach/router";
import { Button, Container, Dropdown, Image, Menu } from "semantic-ui-react";

export function FullMenu() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <Menu borderless attached="bottom">
            <Container>
                <Menu.Item header as={Link} to="/">
                    Fate Sheet App
                </Menu.Item>

                <Menu.Menu position="right">
                    {isAuthenticated ? (
                        <Dropdown
                            className="vertically fitted"
                            item
                            floating
                            trigger={
                                <>
                                    <Image
                                        avatar
                                        spaced="right"
                                        verticalAlign="middle"
                                        src={user.picture}
                                        alt={user.name}
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
                                    onClick={() =>
                                        logout({
                                            redirectTo: window.location.origin,
                                        })
                                    }
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
                                    onClick={() => loginWithRedirect()}
                                />
                            </Menu.Item>
                        </>
                    )}
                </Menu.Menu>
            </Container>
        </Menu>
    );
}
