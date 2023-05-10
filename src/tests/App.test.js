import React from "react";
import { SocialApp } from "../SocialApp"
import { createRoot } from "react-dom/client";

test('render without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  
  root.render(<SocialApp />);
  root.unmount(div);
});
