import { fireEvent, render, screen } from "@testing-library/react";
import {
  MenuEdit,
  MenuEditProps,
} from "../components/molecules/MenuEdit/MenuEdit";

describe("MenuEditのテスト", () => {
  test("NewPageボタンとDoneボタンのアイコンとテキストが表示される", () => {
    // テスト対象をレンダリングする
    render(<MenuEdit />);

    // アイコン（svg）とaltがレンダリング結果に含まれていることを確認する
    expect(screen.getByAltText("新規作成")).toBeTruthy();
    expect(screen.getByAltText("編集モードを解除")).toBeTruthy();

    // テキストがレンダリング結果に含まれていることを確認する
    expect(screen.getByText("New page")).toBeTruthy();
    expect(screen.getByText("Done")).toBeTruthy();
  });

  test("NewPageボタンをクリックした場合、onClick関数が呼び出される", () => {
    const props: MenuEditProps = {
      newPageButtonHandler: jest.fn(),
      doneButtonHandler: jest.fn(),
    };

    // テスト対象をレンダリングする
    render(
      <MenuEdit
        newPageButtonHandler={props.newPageButtonHandler}
        doneButtonHandler={props.doneButtonHandler}
      />
    );

    // ボタンをクリックしたときにonClickが呼ばれたことを確認する
    fireEvent.click(screen.getByTestId("testNewPageButton"));
    fireEvent.click(screen.getByTestId("testDoneButton"));
    expect(props.newPageButtonHandler).toHaveBeenCalled();
    expect(props.doneButtonHandler).toHaveBeenCalled();
  });
});
