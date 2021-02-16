import React from 'react';
import Keyboard from "./components/Keyboard/Keyboard";
import TextArea from "./components/TextArea/TextArea";
import StatsPanel from "./components/StatsPanel/StatsPanel";
import Result from "./components/Result/Result";
import {useStores} from "./hooks/use-stores";
import {observer} from "mobx-react-lite";
import './App.css';

const App = observer(() => {
	const {typingStore} = useStores();
	const isAndroid = /(android)/i.test(navigator.userAgent);
	const isIOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);

	return <div className="App">
		<header className="App-header"/>
		<div className="App-body">
			{isAndroid || isIOS ? 'Please use a computer instead of a smartphone.' : <>
				<div className={'TextArea-container'}>
					<StatsPanel/>
					<TextArea/>
				</div>
				<div className={'Keyboard-container'}>
					<Keyboard/>
				</div>
			</>}
			{typingStore.complete ? <Result/> : null}
		</div>
	</div>;
});

export default App;
