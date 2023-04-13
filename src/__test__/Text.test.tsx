import { render, screen } from "@testing-library/react";
import { Text, TextProps } from "../components/atoms/Text/Text";

describe("Textのテスト", () => {
  test("propsで指定したテキストが表示される", () => {
    const props: TextProps = {
      str: "test",
      color: "#1A1A1A",
      fontSize: 10,
      fontWeight: 400,
      lineHeight: "10px",
      width: "50px",
    };
    // テスト対象をレンダリングする
    render(<Text {...props} />);

    // テキストがレンダリング結果に含まれていることを確認する
    expect(screen.getByText("test")).toBeTruthy();
  });
});
