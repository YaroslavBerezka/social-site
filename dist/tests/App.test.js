"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("react-dom/client");
test('render without crashing', () => {
    const div = document.createElement('div');
    const root = (0, client_1.createRoot)(div);
    root.render(/>);, root.unmount(div));
});
//# sourceMappingURL=App.test.js.map