import { render, screen } from "@testing-library/react";
import { ServiceName } from "../components/molecules/ServiceName/ServiceName";

describe("ServiceNameのテスト", () => {
  test("アイコンとテキストが表示される", () => {
    // テスト対象をレンダリングする
    render(<ServiceName />);

    // アイコン（svg）とaltがレンダリング結果に含まれていることを確認する
    expect(screen.getByAltText("サービスネーム")).toBeTruthy();

    // テキストがレンダリング結果に含まれていることを確認する
    expect(screen.getByText("ServiceName")).toBeTruthy();
  });
});
