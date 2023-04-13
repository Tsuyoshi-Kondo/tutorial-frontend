import { ServiceName } from "../../molecules/ServiceName/ServiceName";
import { Container } from "./style";

// サービスネームのコンポーネント
export const MenuHeader: React.FC = () => {
  return (
    <Container>
      <ServiceName />
    </Container>
  );
};
