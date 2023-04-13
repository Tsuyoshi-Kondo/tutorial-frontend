import { fireEvent, render, screen } from "@testing-library/react";
import {
  MenuItem,
  MenuItemProps,
} from "../components/molecules/MenuItem/MenuItem";

describe("ServiceNameのテスト", () => {
  test("propsで指定したテキストが表示され、削除アイコンが非表示である", () => {
    const props: MenuItemProps = {
      id: 1,
      title: "坊ちゃん",
      key: 0,
      isMenuMode: false,
      selected: false,
      onClick: jest.fn(),
      deleteButtonHandler: jest.fn(),
    };

    // テスト対象をレンダリングする
    render(<MenuItem {...props} />);

    // アイコン（svg）とaltがレンダリング結果に含まれていることを確認する
    expect(screen.getByText("坊ちゃん")).toBeTruthy();

    // 削除アイコンがレンダリング結果に含まれていないことを確認する
    expect(screen.queryByAltText("本の削除")).toBeNull();
  });

  test("編集モードの場合、削除アイコンが表示される", () => {
    const props: MenuItemProps = {
      id: 1,
      title: "坊ちゃん",
      key: 0,
      isMenuMode: true,
      selected: false,
      onClick: jest.fn(),
      deleteButtonHandler: jest.fn(),
    };

    // テスト対象をレンダリングする
    render(<MenuItem {...props} />);

    // 削除アイコンがレンダリング結果に含まれていることを確認する
    expect(screen.getByAltText("本の削除")).toBeTruthy();
  });

  test("MenuItemコンポーネント及び削除アイコンをクリックした場合、各onClick関数が呼び出される", () => {
    const props: MenuItemProps = {
      id: 1,
      title: "坊ちゃん",
      key: 0,
      isMenuMode: true,
      selected: false,
      onClick: jest.fn(),
      deleteButtonHandler: jest.fn(),
      dataTestId: "testComponent",
    };

    // テスト対象をレンダリングする
    render(<MenuItem {...props} />);

    // ServiceNameコンポーネントがクリックされたときにonClickが呼ばれたことを確認する
    fireEvent.click(screen.getByTestId("testComponent"));
    expect(props.onClick).toHaveBeenCalled();

    // 削除アイコンがクリックされたときにdeleteButtonHandlerが呼ばれたことを確認する
    fireEvent.click(screen.getByAltText("本の削除"));
    expect(props.deleteButtonHandler).toHaveBeenCalled();
  });
});
