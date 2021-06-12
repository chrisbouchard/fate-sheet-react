import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getResourceData, readEndpoint } from 'redux-json-api';
import { Segment } from "semantic-ui-react";

export default function Sheet() {
    const characters = useSelector(state => getResourceData(state, 'characters'));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readEndpoint('characters'))
    }, [dispatch]);

    return (
        <Segment>
            <ul>
                { characters?.map(character => (
                    <li>{character.attributes.name}</li>)
                ) }
            </ul>
        </Segment>
    );
}
