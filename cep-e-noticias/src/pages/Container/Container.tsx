import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BuscaCep from "../BuscaCep/BuscaCep";
import Noticias from "../Noticias/Noticias";
import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <Tabs>
        <TabList>
          <Tab>BuscaCep</Tab>
          <Tab>Noticias</Tab>
        </TabList>

        <TabPanel>
          <BuscaCep />
        </TabPanel>
        <TabPanel>
          <Noticias />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Container;
