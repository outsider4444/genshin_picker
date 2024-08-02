import React, {useState} from 'react';
import Icon from "../Icons/Icon";

const Content = ({Pick, ImmunePick, heroes1, heroes2, immuneCharacters, elements, heroesList}) => {

    const listItems1 = heroesList.map((character) =>
        <Icon level={character.level} consta={character.consta} backgroundColor={character.bgColor}
              disabled={character.disabled} size={100} key={character.id} image={character.image}
              element={elements[character.elementType]}
              action={() => Pick(character)}/>
    );
    const listItems2 = heroesList.map((character) =>
        <Icon level={character.level} consta={character.consta} backgroundColor={character.bgColor}
              disabled={character.disabled} size={100} key={character.id} image={character.image}
              element={elements[character.elementType]}
              action={() => Pick(character)}/>
    );
    const listImmune = immuneCharacters.map((character) =>
        <Icon level={character.level} consta={character.consta} backgroundColor={character.bgColor}
              disabled={character.disabled} size={100} key={character.id} image={character.image}
              element={elements[character.elementType]}
              action={() => ImmunePick(character)}/>
    );

    return (
        <div style={{width: "100%"}}>
            <div style={{width: "100%", display: "flex", columnGap: "150px"}}>
                <div style={{margin: "30px 30px", width: "50%", float: "left"}}>
                    {listItems1}
                </div>
                <div style={{margin: "30px 30px 0 0", width: "50%", float: "right"}}>
                    {listItems2}
                </div>
            </div>
            <div style={{
                textAlign: "center",
                width: "100%",
                display: "block",
                justifyItems: "center",
                alignItems: "center"
            }}>
                <strong>Беннет</strong> <br/>
                <div style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                    justifyItems: "center",
                    alignItems: "center"
                }}>
                    {listImmune}
                </div>
            </div>
        </div>
    );
};

export default Content;
