test("first example", () => {
  const myMock = jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce("hello word")
    .mockReturnValueOnce(34);

  const result1 = myMock();
  const result2 = myMock();
  const result3 = myMock();

  expect(myMock).toHaveBeenCalledTimes(3);

  expect(result1).toBe(true);
  expect(result2).toBe("hello word");
  expect(result3).toBe(34);
});
