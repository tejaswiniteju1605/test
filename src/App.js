import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "what is react",
    content: "react is a front-end javascript framework",
  },
  {
    title: "why use react",
    content: "react is a favorite js library  among enginers",
  },
  {
    title: "how do you use",
    content: "you use react by creating  components",
  },
];

const options = [
  {
    label: "The color red",
    value: "Red",
  },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "the color blue",
    value: "blue",
  },
];

// const showAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Accordion items={items} />;
//   }
// };

// const showSearch = () => {
//   if (window.location.pathname === "/list") {
//     return <Search />;
//   }
// };

// const showtranslate = () => {
//   if (window.location.pathname === "/translate") {
//     return <Translate />;
//   }
// };
// const showDropdown = () => {
//   if (window.location.pathname === "/dropdown") {
//     return <Dropdown />;
//   }
// };
const App = () => {
  const [selected, setSelected] = useState(options[0]);

  // const [showDropdown, setShowdropdown] = useState(true);
  return (
    <div className="container ">
      {/* {showAccordion()}
      {showSearch()}
      {showtranslate()}
      {showDropdown()} */}

      {/* <Accordion items={items} /> */}
      {/* <Search /> */}

      {/* <button onClick={() => setShowdropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>

      {/* <Translate /> */}
    </div>
  );
};

export default App;
