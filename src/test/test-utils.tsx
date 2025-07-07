/// <reference types="vitest" />
import { type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { TestProviders } from "./test-providers";

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: TestProviders, ...options });

// Mock user data
export const mockUser = {
  uid: "test-user-id",
  email: "test@example.com",
  displayName: "Test User",
};

// Mock product data
export const mockProduct = {
  id: "test-product-id",
  name: "Test Product",
  price: 99.99,
  description: "A test product",
  image: "test-image.jpg",
  category: "test-category",
};
