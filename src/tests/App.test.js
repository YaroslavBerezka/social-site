import React from "react"
import { createRoot } from "react-dom/client"
import { SocialApp } from "../SocialApp"

test('render without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  
  root.render(<SocialApp />);
  root.unmount(div);
});
