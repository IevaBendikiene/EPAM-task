describe("Checking test", () => {
  beforeEach( async () =>{
    await browser.url("https://www.saucedemo.com/");
  })
  it("First test", async () => {
    
    const title = await browser.getTitle();
    console.log(title);

    expect(title).toEqual("Swag Labs")
  });
});
