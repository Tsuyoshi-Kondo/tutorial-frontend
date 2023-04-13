import { fireEvent, render, screen } from "@testing-library/react";
import { CustomButton } from "../components/molecules/CustomButton/CustomButton";
import EditIcon from "../assets/edit.svg";
import { CustomButtonProps } from "../components/molecules/CustomButton/CustomButton";

// onClickのモック関数を作成
const onClickMock = jest.fn();

// テスト対象に渡すpropsを作成
const props: CustomButtonProps = {
  variant: "primary",
  shape: "rectangle",
  src: EditIcon,
  alt: "新規登録",
  text: "Edit",
  onClick: onClickMock,
  dataTestId: "testCustomButton",
};

describe("CustomButtonのテスト", () => {
  test("propsで指定したアイコン・テキストとボタンが表示される", () => {
    // テスト対象をレンダリングする
    render(<CustomButton {...props} />);

    // React Testing Libraryはボタンのレイアウトテストは不可？
    // Cypress Component Test Runnerだとできる？

    // ボタン（data-test）がレンダリング結果に含まれていることを確認する
    expect(screen.getByTestId("testCustomButton")).toBeTruthy();

    // アイコン（svg）とaltがレンダリング結果に含まれていることを確認する
    expect(screen.getByAltText("新規登録")).toBeTruthy();

    // テキストがレンダリング結果に含まれていることを確認する
    expect(screen.getByText("Edit")).toBeTruthy();
  });

  test("ボタンをクリックしたときにonClick関数が呼ばれる", () => {
    // テスト対象をレンダリングする
    render(<CustomButton {...props} />);

    // ボタンをクリックしたときにonClickが呼ばれたことを確認する
    fireEvent.click(screen.getByTestId("testCustomButton"));
    expect(onClickMock).toHaveBeenCalled();
  });
});
