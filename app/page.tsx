import Button, { ButtonType } from "@/components/Form/Button";
import FormHeader from "@/components/Form/FormHeader";
import FooterLayout from "@/components/Layout/FooterLayout";
import FormLayout from "@/components/Layout/FormLayout";
import MainLayout from "@/components/Layout/MainLayout";
import StepsLayout from "@/components/Layout/StepsLayout";

export default function Home() {
  return (
    <MainLayout>
      <StepsLayout>
          <FormLayout>
            <FormHeader title="Welcome to our site" description="Please fill out the form below to get started." />
          </FormLayout>
      </StepsLayout>
      <FooterLayout>
        <Button type={ButtonType.Back}>Go Back</Button>
        <Button type={ButtonType.Forward}>Next Step</Button>
      </FooterLayout>
    </MainLayout>
  );
}
