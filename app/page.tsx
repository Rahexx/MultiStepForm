"use client";
import Button, { ButtonType } from "@/components/Form/Button";
import FormHeader from "@/components/Form/FormHeader";
import LabeledInput from "@/components/Form/LabeledInput";
import FooterLayout from "@/components/Layout/FooterLayout";
import FormLayout from "@/components/Layout/FormLayout";
import MainLayout from "@/components/Layout/MainLayout";
import PersonalLayout from "@/components/Layout/PersonalLayout";
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
            {step === 1 && (
              <PersonalLayout>
                <LabeledInput type="text" label="Name" value="" onBlur={() => {}} hasError={false} placeholder="e.g. Stephen King" />
                <LabeledInput type="email" label="Email Address" value="" onBlur={() => {}} hasError={false} placeholder="e.g. stephenking@lorem.com" />
                <LabeledInput type="tel" label="Phone Number" value="" onBlur={() => {}} hasError={false} placeholder="e.g. +1 234 567 890" />
              </PersonalLayout>
            )}
          </FormLayout>
      </StepsLayout>
      <FooterLayout>
        {step > 1 ? (
          <Button type={ButtonType.Back} onClick={prevStep}>Go Back</Button>
        ) : (<div />)}
        {step < 4 && (
          <Button type={ButtonType.Forward} onClick={nextStep}>Next Step</Button>
        )}
      </FooterLayout>
    </MainLayout>
  );
}
