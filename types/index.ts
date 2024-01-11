import { ReactNode } from "react";

export type TechnologyPin = {
  logo: string;
  name?: string;
  level?: number;
};

export type CustomBadge = {
  title: string;
  color: string;
};

export type ChildrenProps = {
  children: ReactNode;
};

export type IToken = {
  accessToken: string;
  refreshToken?: string;
};