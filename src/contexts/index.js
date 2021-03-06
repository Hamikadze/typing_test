import React from 'react';
import TypingStore from '../stores/typing-store';
import TextStore from '../stores/text-store';
import KeyboardStore from "../stores/keyboard-store";

export const storesContext = React.createContext({
    typingStore: new TypingStore(),
    textStore: new TextStore(),
    keyboardStore: new KeyboardStore(),
})