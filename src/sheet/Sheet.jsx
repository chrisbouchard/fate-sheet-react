import { useContext } from "react";
import usePromise from "react-promise-suspense";
import { Segment } from "semantic-ui-react";

import { ApiContext } from "../api/Api";

export default function Sheet() {
    const api = useContext(ApiContext);
    const response = usePromise(
        () =>
            api.fetch("characters", {
                params: { include: "aspects" },
            }),
        []
    );

    return (
        <Segment>
            {response.data.map((character) => (
                <li>
                    {character.name} ({character.aspects.data[0]?.name})
                </li>
            ))}
        </Segment>
    );
}
