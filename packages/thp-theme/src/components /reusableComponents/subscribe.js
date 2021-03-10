import React from "react";
import { Input } from "./inputs";
import { Primary } from "./buttons";

export const SubscribeButton = ({ children }) => (
  <>
    <Input placeholder={"email.example.com"}></Input>
    <Primary>Subscribe</Primary>
  </>
);
