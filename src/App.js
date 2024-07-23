import logo from './logo.svg';
import './App.css';
import Content from "./Picker/Content";
import Icon from "./Icons/Icon";
import React, {useState} from "react";
import PreIcon from "./Icons/PreIcon";

function App() {
    const [charactersList1, setCharactersList1] = useState([
        {
            id: 1,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/9a8/w4vrp5t2uh6px1u2ovpoloa6tsglw7gh/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klorinda.webp",
            level: 90,
            consta: 0,
            disabled: true
        },
        {
            id: 2,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp",
            level: 90,
            consta: 0,
            disabled: true
        },
        {
            id: 3,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp",
            level: 90,
            consta: 0,
            disabled: true
        },
        {
            id: 4,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/2df/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sara.webp",
            level: 90,
            consta: 0,
            disabled: true,
            bgColor: "#836dad"
        },
        {
            id: 5,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/535/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiangling.webp",
            level: 90,
            consta: 0,
            disabled: true,
            bgColor: "#836dad"
        },
        {
            id: 6,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/148/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/SHen-KHe.png",
            level: 90,
            consta: 0,
            disabled: true
        },
        {
            id: 7,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/f7f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xingqiu.webp",
            level: 90,
            consta: 0,
            disabled: true,
            bgColor: "#836dad"
        },
        {
            id: 8,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp",
            level: 90,
            consta: 0,
            disabled: true
        }, {
            id: 9,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp",
            level: 90,
            consta: 0,
            disabled: true,
            bgColor: "#836dad"
        }, {
            id: 10,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/0e0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/fischl.webp",
            level: 90,
            consta: 0,
            disabled: true,
            bgColor: "#836dad"
        }, {
            id: 11,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/d5e/e2zf9f1pk8r3j6ope30ce3yi9xmle5vd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Furina.webp",
            level: 90,
            consta: 0,
            disabled: true
        }, {
            id: 12,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/c99/lkvymlx694lj4qlc0t1xju6833k70ky0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/neuvillette.webp",
            level: 90,
            consta: 0,
            disabled: true
        }])
    const [charactersList2, setCharactersList2] = useState([
        {
            id: 1,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/9a8/w4vrp5t2uh6px1u2ovpoloa6tsglw7gh/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klorinda.webp",
            level: 90,
            consta: 0,
            disabled: false
        },
        {
            id: 2,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp",
            level: 90,
            consta: 0,
            disabled: false
        },
        {
            id: 3,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp",
            level: 90,
            consta: 0,
            disabled: false
        },
        {
            id: 4,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/2df/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sara.webp",
            level: 90,
            consta: 0,
            disabled: false,
            bgColor: "#836dad"
        },
        {
            id: 5,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/535/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiangling.webp",
            level: 90,
            consta: 0,
            disabled: false,
            bgColor: "#836dad"
        },
        {
            id: 6,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/148/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/SHen-KHe.png",
            level: 90,
            consta: 0,
            disabled: false
        },
        {
            id: 7,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/f7f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xingqiu.webp",
            level: 90,
            consta: 0,
            disabled: false,
            bgColor: "#836dad"
        },
        {
            id: 8,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp",
            level: 90,
            consta: 0,
            disabled: false
        }, {
            id: 9,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp",
            level: 90,
            consta: 0,
            disabled: false,
            bgColor: "#836dad"
        }, {
            id: 10,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/0e0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/fischl.webp",
            level: 90,
            consta: 0,
            disabled: false,
            bgColor: "#836dad"
        }, {
            id: 11,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/d5e/e2zf9f1pk8r3j6ope30ce3yi9xmle5vd/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Furina.webp",
            level: 90,
            consta: 0,
            disabled: false
        }, {
            id: 12,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/c99/lkvymlx694lj4qlc0t1xju6833k70ky0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/neuvillette.webp",
            level: 90,
            consta: 0,
            disabled: false
        }])
    const [charactersImmuneList, setCharactersImmuneList] = useState([
        {
            id: 1,
            image: "https://genshin-info.ru/upload/resize_cache/iblock/018/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/bennett.webp",
            disabled: false,
            bgColor: "#836dad"
        },
    ])

    // Список ходов (не изменяем в ходе работы приложения)
    const states = [
        "Бан1", "Бан2",
        "Бан1", "Бан2",
        "Пик1", "Пик2",
        "Пик2", "Пик1",
        "Пик1", "Пик2",
        "Пик1И", "Пик2И",
        "Бан2", "Бан1",
        "Пик2", "Пик1",
        "Пик1", "Пик2",
        "Пик2", "Пик1",
        "Пик1И", "Пик2И",
        "Конец"
    ];

    const bannedCount = 3;
    const pickedCount = 9;

    const [currentStateId, setCurrentStateId] = useState(0);
    const [currentState, setCurrentState] = useState(states[currentStateId]);

    // Увеличение счётчика для смены хода
    const incrementCount = () => {
        if (currentStateId === states.length - 1) {
            setCurrentStateId(prevCount => 0);
            setCurrentState(states[0]);
        } else {
            setCurrentStateId(prevCount => prevCount + 1);
            setCurrentState(states[currentStateId + 1]);
        }
    }

    // Список с заглушками для пиков и банов
    const [bannedPreIcons1, setBannedPreIcons1] = useState([
        {
            number: 1
        },
        {
            number: 3,
        },
        {
            number: 14
        }
    ]);
    const [bannedPreIcons2, setBannedPreIcons2] = useState([
        {
            number: 2
        },
        {
            number: 4,
        },
        {
            number: 13
        }
    ]);
    const [pickPreIcons1, setPickPreIcons1] = useState([
        {
            id: 1,
            number: 5
        },
        {
            id: 2,
            number: 8,
        },
        {
            id: 3,
            number: 9
        },
        {
            id: 4,
            number: "11*"
        },
        {
            id: 5,
            number: 16
        },
        {
            id: 6,
            number: 17
        },
        {
            id: 7,
            number: 20
        },
        {
            id: 8,
            number: "21*"
        }
    ]);
    const [pickPreIcons2, setPickPreIcons2] = useState([
        {
            id: 1,
            number: 6
        },
        {
            id: 2,
            number: 7,
        },
        {
            id: 3,
            number: 10
        },
        {
            id: 4,
            number: "12*"
        },
        {
            id: 5,
            number: 15
        },
        {
            id: 6,
            number: 18
        },
        {
            id: 7,
            number: 19
        },
        {
            id: 8,
            number: "22*"
        }
    ]);

    // Списки с выбранными и забаннеными персонажами
    const [bannedCharacters1, setBannedCharacters1] = useState([]);
    const [bannedCharacters2, setBannedCharacters2] = useState([]);
    const [pickedCharacters1, setPickedCharacters1] = useState([]);
    const [pickedCharacters2, setPickedCharacters2] = useState([]);

    // Метод обновления списков для того чтоб заблокировать в них методы
    const updateCharactersList1 = (disabled) => {
        setCharactersList1(prevItems => prevItems.map(item => ({
            ...item,
            disabled: disabled
        })));
    }
    const updateCharactersList2 = (disabled) => {
        setCharactersList2(prevItems => prevItems.map(item => ({
            ...item,
            disabled: disabled
        })));
    }
    function ImmunePick(item) {
        if (currentState === "Пик1И") {
            if (!pickedCharacters1.some(char => char.id === item.id)) {
                addPickedCharacter1(item);
                updateCharactersList1(true);
                updateCharactersList2(false);
                incrementCount();
                console.log(currentStateId)
            }
        }
        if (currentState === "Пик2И") {
            if (!pickedCharacters2.some(char => char.id === item.id)) {
                addPickedCharacter2(item);
                updateCharactersList1(false);
                updateCharactersList2(true);
                incrementCount();
                console.log(currentStateId)
            }
        }
    }

    function Pick(item) {
        if (currentState === "Бан1") {
            addBannedCharacter1(item);
            setCharactersList2(prevItems => prevItems.filter(char => char.id !== item.id));
        }
        if (currentState === "Бан2") {
            addBannedCharacter2(item);
            setCharactersList1(prevItems => prevItems.filter(char => char.id !== item.id));
        }
        if (currentState === "Пик1" || currentState === "Пик1И") {
            if (!pickedCharacters1.some(char => char.id === item.id)) {
                addPickedCharacter1(item);
                setCharactersList1(prevItems => prevItems.filter(char => char.id !== item.id));
            }
        }
        if (currentState === "Пик2" || currentState === "Пик2И") {
            if (!pickedCharacters2.some(char => char.id === item.id)) {
                addPickedCharacter2(item);
                setCharactersList2(prevItems => prevItems.filter(char => char.id !== item.id));
            }
        }
        incrementCount();
        if (states[currentStateId + 1] === "Бан1") {
            updateCharactersList1(true);
            updateCharactersList2(false);
        }
        if (states[currentStateId + 1] === "Бан2") {
            updateCharactersList1(false);
            updateCharactersList2(true);
        }
        if (states[currentStateId + 1] === "Пик1" || states[currentStateId + 1] === "Пик1И") {
            updateCharactersList1(false);
            updateCharactersList2(true);
        }
        if (states[currentStateId + 1] === "Пик2" || states[currentStateId + 1] === "Пик2И") {
            updateCharactersList1(true);
            updateCharactersList2(false);
        }
        console.log(states[currentStateId + 1])
    }

    // Методы добавления в список пиков и банов
    function addPickedCharacter1(item) {
        if (pickedCharacters1.length < pickedCount) {
            setPickedCharacters1([...pickedCharacters1, item]);
            setPickPreIcons1(prevItems => prevItems.slice(1));
        }
    }
    function addPickedCharacter2(item) {
        if (pickedCharacters2.length < pickedCount) {
            setPickedCharacters2([...pickedCharacters2, item]);
            setPickPreIcons2(prevItems => prevItems.slice(1));
        }
    }
    function addBannedCharacter1(item) {
        if (bannedCharacters1.length < bannedCount) {
            setBannedCharacters1([...bannedCharacters1, item]);
            setBannedPreIcons1(prevItems => prevItems.slice(1));
        }
    }
    function addBannedCharacter2(item) {
        if (bannedCharacters2.length < bannedCount) {
            setBannedCharacters2([...bannedCharacters2, item]);
            setBannedPreIcons2(prevItems => prevItems.slice(1));
        }
    }

    // Список заглушек с цифрами до бана
    const listPreBanItems1 = bannedPreIcons1.map((icon) =>
        <PreIcon key={icon.number} number={icon.number} float={"right"}/>
    );
    const listPreBanItems2 = bannedPreIcons2.map((icon) =>
        <PreIcon key={icon.number} number={icon.number} float={"left"}/>
    );
    // Список заглушек с цифрами до пика
    const listPrePickItems1 = pickPreIcons1.map((icon) =>
        <PreIcon key={icon.id} number={icon.number} float={"right"}/>
    );
    const listPrePickItems2 = pickPreIcons2.map((icon) =>
        <PreIcon key={icon.id} number={icon.number} float={"left"}/>
    );

    const listPickedItems1 = pickedCharacters1.map((character) =>
        <Icon consta={character.consta} level={character.level} backgroundColor={character.bgColor} key={character.id} float={"right"} image={character.image}/>
    );
    const listPickedItems2 = pickedCharacters2.map((character) =>
        <Icon consta={character.consta} level={character.level} backgroundColor={character.bgColor} key={character.id} float={"left"} image={character.image}/>
    );
    const listBannedItems1 = bannedCharacters1.map((character) =>
        <Icon level={character.level} consta={character.consta}  key={character.id} float={"right"} banned={true} image={character.image}/>
    );
    const listBannedItems2 = bannedCharacters2.map((character) =>
        <Icon level={character.level} consta={character.consta}  key={character.id} float={"left"} banned={true} image={character.image}/>
    );
    return (
        <div className="App">
            <header className="App-header">
                <div className={"header"}>
                    <div className={"player player1"}>
                        <div style={{float: "left", textAlign:"left", marginLeft: "45px", marginTop:"15px"}}>
                            Имя 1 <br/>
                            <div>
                                Таймер
                            </div>
                        </div>
                        <div style={{float: "right"}}>
                            {listBannedItems1}
                            {listPreBanItems1}
                        </div>
                        <div style={{float: "right", width: "100%"}}>
                            {listPickedItems1}
                            {listPrePickItems1}
                        </div>
                    </div>
                    <div>
                        {/*{currentStateId}*/}
                        {currentState}
                        <br/>
                        Баны
                        <br/>
                        <br/>
                        Пики
                    </div>
                    <div className={"player"}>
                        <div  style={{float: "right", textAlign:"right", marginRight: "45px", marginTop:"15px"}}>
                            Имя 2 <br/>
                            <div>
                                Таймер
                            </div>
                        </div>
                        <div style={{float: "left"}}>
                            {listBannedItems2}
                            {listPreBanItems2}
                        </div>
                        <div style={{float: "left", width: "100%"}}>
                            {listPickedItems2}
                            {listPrePickItems2}
                        </div>
                    </div>
                </div>
            </header>
            <Content Pick={Pick} ImmunePick={ImmunePick} characters1={charactersList1} characters2={charactersList2}
                     immuneCharacters={charactersImmuneList}
            />
        </div>
    );
}

export default App;
