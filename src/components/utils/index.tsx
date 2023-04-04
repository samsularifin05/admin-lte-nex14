import { atom } from "recoil";
import { calculateWindowSize, getItem, removeItem, setItem } from "./function";
import { InpuSelect, InputField } from "./Filed";
import Row from "./Row";
import Col from "./Col";
import Button from "./Button";
import Card from "./Card";
import PanelContent from "./PanelContent";

interface LoadingModel {
  content?: boolean;
  button?: boolean;
  tabel?: boolean;
}
interface ModelModal {
  isModalShow?: boolean;
  isEdit?: boolean;
  data?: any;
}

const isLoading = atom({
  key: "loading",
  default: {
    button: false,
    content: false,
    tabel: false
  } as LoadingModel
});

const modalShow = atom({
  key: "modalShow",
  default: {
    isModalShow: false,
    isEdit: false,
    data: []
  } as ModelModal
});

const screenSize = atom({
  key: "getSizi",
  default: {
    screenSize: calculateWindowSize(
      typeof window !== "undefined" ? window.innerWidth : 0
    )
  }
});

const toggleSidebarMenu = atom({
  key: "togleMenuSidebar",
  default: {
    menuSidebarCollapsed: false
  }
});

export {
  removeItem,
  setItem,
  PanelContent,
  Card,
  Button,
  Col,
  Row,
  isLoading,
  modalShow,
  InpuSelect,
  InputField,
  screenSize,
  toggleSidebarMenu,
  getItem
};