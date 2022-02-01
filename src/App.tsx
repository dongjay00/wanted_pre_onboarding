import React from "react";
import styled from "styled-components";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";

function App() {
  return (
    <AppWrapper>
      <Toggle />
      <AppHr />
      <Modal />
      <AppHr />
      <Tab />
      <AppHr />
      <Tag />
      <AppHr />
      <AutoComplete />
      <AppHr />
      <ClickToEdit />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHr = styled.hr`
  border: solid 3px #000000;
`;
