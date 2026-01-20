import Button, { ButtonType } from "@/components/Form/Button";
import FooterLayout from "@/components/Layout/FooterLayout";
import MainLayout from "@/components/Layout/MainLayout";
import StepsLayout from "@/components/Layout/StepsLayout";
import Nav from "@/components/Nav/Nav";

export default function Home() {
  return (
    <MainLayout>
      <StepsLayout>
          <Nav />
        </StepsLayout>
      <FooterLayout>
        <Button type={ButtonType.Back}>Go Back</Button>
        <Button type={ButtonType.Forward}>Next Step</Button>
      </FooterLayout>
    </MainLayout>
  );
}
