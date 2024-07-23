import React, {useState} from 'react';
import Icon from "../Icons/Icon";

const Content = ({Pick, ImmunePick, characters1, characters2, immuneCharacters
                 }) => {

    const listItems1 = characters1.map((character) =>
        <Icon level={character.level} consta={character.consta} backgroundColor={character.bgColor} disabled={character.disabled} size={100} key={character.id} image={character.image} action={() => Pick(character)}/>
    );
    const listItems2 = characters2.map((character) =>
        <Icon level={character.level} consta={character.consta} backgroundColor={character.bgColor} disabled={character.disabled} size={100} key={character.id} image={character.image} action={() => Pick(character)}/>
    );
    const listImmune = immuneCharacters.map((character) =>
        <Icon level={character.level} consta={character.consta} backgroundColor={character.bgColor} disabled={character.disabled} size={100} key={character.id} image={character.image} action={() => ImmunePick(character)}/>
    );

    return (
        <div style={{width: "100%"}}>
            <div style={{width: "100%", display: "flex"}}>
                <div style={{margin: "30px 30px", width: "800px", float: "left"}}>
                    {listItems1}
                </div>
                <div style={{margin: "30px 30px 0 275px", width: "800px", float: "right"}}>
                    {listItems2}
                </div>
            </div>
            <div style={{textAlign: "center", width: "100%", marginLeft:"920px", display: "flex" }}>
                <div>
                    <strong>Беннет</strong> <br/>
                    {listImmune}
                </div>
            </div>
        </div>
    );
};

export default Content;
