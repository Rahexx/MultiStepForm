"use client";
import Button, { ButtonType } from "@/components/Form/Button";
import FormHeader from "@/components/Form/FormHeader";
import FooterLayout from "@/components/Layout/FooterLayout";
import FormLayout from "@/components/Layout/FormLayout";
import MainLayout from "@/components/Layout/MainLayout";
import StepsLayout from "@/components/Layout/StepsLayout";
import { STEPS } from "@/config/steps.config";
import { useStepsStore } from "@/store/useStepsStore";

export default function Home() {
  const {step, nextStep, prevStep} = useStepsStore();
  const currentStep = STEPS.find(s => s.id === step) || STEPS[0];
  
  return (
    <MainLayout>
      <StepsLayout>
          <FormLayout>
            <FormHeader title={currentStep.title} description={currentStep.description} />
          </FormLayout>
      </StepsLayout>
      <FooterLayout>
        <Button type={ButtonType.Back} onClick={prevStep}>Go Back</Button>
        <Button type={ButtonType.Forward} onClick={nextStep}>Next Step</Button>
      </FooterLayout>
    </MainLayout>
  );
}
