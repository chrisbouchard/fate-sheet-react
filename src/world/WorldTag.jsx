import { Label } from "semantic-ui-react";

export function WorldTag({ world }) {
    return (
        <Label color="blue">
            {world.name}
            <Label.Detail>World</Label.Detail>
        </Label>
    );
}
