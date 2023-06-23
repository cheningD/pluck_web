import { test, expect } from "@playwright/experimental-ct-react";
import { SimpleComponent } from "../../../src/components/SimpleComponent";

test("should work", async ({ mount }) => {
  const component = await mount(<SimpleComponent />);
  await expect(component).toContainText("Hello, World!");
});
