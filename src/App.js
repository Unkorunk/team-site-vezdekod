import avatar_alexander from './avatar/alexander.jpg';
import avatar_arina from './avatar/arina.jpg';
import avatar_vladislav from './avatar/vladislav.jpg';
import avatar_yuriy from './avatar/yuriy.jpg';

import './App.css';
import {
    AdaptivityProvider,
    ConfigProvider,
    useAdaptivity,
    AppRoot,
    SplitLayout,
    SplitCol,
    ViewWidth,
    View,
    Panel,
    PanelHeader,
    Avatar,
    Header,
    Group,
    SimpleCell,
    Banner
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

function App() {
    const {viewWidth} = useAdaptivity();

    return (
        <AppRoot>
            <Panel id="header">
                <PanelHeader>Команда Time Limit</PanelHeader>
                <UserCard username="Михалев Юрий" description="Студент 3-го курса. Люблю делать игры и играть в них"
                          avatar={avatar_yuriy}/>
                <UserCard username="Рагузина Арина"
                          description="Люблю и изучаю 3d-моделирование.  Планирую применить знания в геймдеве."
                          avatar={avatar_arina}/>
                <UserCard username="Михайленко Александр"
                          description="3 курс ПМИ. Обожаю играть в баскетбол и делать игры. В баскетбол я сегодня уже играл)"
                          avatar={avatar_alexander}/>
                <UserCard username="Калинин Владислав"
                          description="3 курс ПМИ. Интересуюсь темой GameDev, активно принимаю участие в различных GameJam-ах. Также увлекаюсь Японией."
                          avatar={avatar_vladislav}/>
            </Panel>
        </AppRoot>
    );
}

function UserCard({username, description, avatar}) {
    return (
        <Banner
            before={<Avatar size={80} mode="image" src={avatar}/>}
            header={username}
            text={description}
        />
    )
}

export default App;
