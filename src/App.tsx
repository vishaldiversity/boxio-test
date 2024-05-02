import React from "react";
import Xarrow, { Xwrapper } from "react-xarrows";

import "./App.css";

/*
    React App with Typescript in CodeSandbox
    The Static Data app below shows two boxes and uses react-xarrows to draw an Arrow between box1 and box2

    Tasks: 
    
    Modify the app so that when a user clicks on the dark canvas
      1) a new box gets added to the screen in the position that the user clicked
      2) an arrow gets drawn from the previous box to the new box

    
    Important Tips:
      - You are allowed to use Google
      - Try to explain what you are doing as you work
      - You don't need to write perfect code 
      - you can always refactor later, or explain what you would do given more time
    
    Out of Scope
      Styling
      Tests

  */

const Box = (box: any) => {
  const Style = {
    position: "absolute",
    border: "grey solid 2px",
    borderRadius: "10px",
    padding: "5px",
    ...box,
  };

  return (
    <div key={box.id} id={box.id} style={Style}>
      {box.id}
    </div>
  );
};

function App() {
  const boxes = [
    {
      id: "box1",
      left: 100,
      top: 100,
      links: ["box2"],
    },
    {
      id: "box2",
      left: 300,
      top: 200,
      links: [],
    },
  ];

  return (
    <div id="canvas">
      <Xwrapper>
        {boxes.map((b) => (
          <Box {...b} />
        ))}
        {boxes.map((b) =>
          b.links.length
            ? b.links.map((l, i) => (
                <Xarrow key={b.id + "-" + i} start={b.id} end={l} />
              ))
            : null
        )}
      </Xwrapper>
    </div>
  );
}

export default App;
