import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Menu } from "../components/Templates/Menu/Menu";

describe("Menuのテスト", () => {
  test("メニューフッターのEditボタンをクリックすると、New pageボタン・Doneボタン・削除アイコンが表示される（メニュー編集モード）", async () => {
    // テスト対象のコンポーネントをレンダリング後、rerender関数を取得する
    render(<Menu />);

    // Editボタンをクリックする
    fireEvent.click(screen.getByTestId("testMenuEditButton"));

    // New pageボタンとDoneボタンの各テキストがレンダリング結果に含まれていることを確認する
    expect(await screen.findByText("New page")).toBeTruthy();
    expect(await screen.findByText("Done")).toBeTruthy();
    expect(await screen.findAllByAltText("本の削除")).toBeTruthy();
  });

  test("メニュー編集モード時、New pageボタンをクリックするとタイトルが「タイトル」の本が新たに表示される", async () => {
    // テスト対象のコンポーネントをレンダリング後、rerender関数を取得する
    const { rerender } = render(<Menu />);

    // タイトルが「タイトル」の本の数を取得する（New pageボタンクリック前）
    const titleNum = (await screen.findAllByText("タイトル")).length;

    // Editボタンをクリックする
    fireEvent.click(screen.getByTestId("testMenuEditButton"));

    // New pageボタンをクリックする
    fireEvent.click(screen.getByTestId("testNewPageButton"));

    //rerender(<Menu />);

    // タイトルが「タイトル」の本の数を取得する（New pageボタンクリック後）
    //expect((await screen.findAllByText("タイトル")).length).toEqual(6);
    expect((await screen.findAllByText("タイトル")).length).toEqual(
      titleNum + 1
    );
  });
});
