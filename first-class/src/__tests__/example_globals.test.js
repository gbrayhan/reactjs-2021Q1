it("description", () => {
  expect(true).toBe(true);
});

it("description dos", () => {
  expect(true).toBe(true);
});

it("description tres", () => {
  expect(true).toBe(true);
});

describe("group describe uno", () => {
  it("description", () => {
    expect(true).toBe(true);
  });

  it("description dos", () => {
    expect(true).toBe(true);
  });

  it("description tres", () => {
    expect(true).toBe(true);
  });

  it("string", () => {
    expect("F-0009934").toMatch(/F\-+[0-9]{6,12}/);
    expect("F-0009934-SUCCESS").not.toMatch(/ERROR/);
  });
});
