"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("bab8c24e-40ec-4e1f-95d7-0e022f47c1e4");
  }, []);

  return null;
};
