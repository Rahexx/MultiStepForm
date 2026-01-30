"use client";
import Button, { ButtonType } from "@/components/Form/Button";
import FormHeader from "@/components/Form/FormHeader";
import FooterLayout from "@/components/Layout/FooterLayout";
import FormLayout from "@/components/Layout/FormLayout";
import MainLayout from "@/components/Layout/MainLayout";
import StepsLayout from "@/components/Layout/StepsLayout";
import AddOnsStep from "@/components/Steps/AddOnsStep";
import PersonalStep from "@/components/Steps/PersonalStep";
import PlanStep from "@/components/Steps/PlanStep";
import { STEPS } from "@/config/steps.config";
import { useFormStore } from "@/store/useFormStore";
import { useStepsStore } from "@/store/useStepsStore";

export default function Home() {
  const {step, nextStep, prevStep} = useStepsStore();
  const {name, email, phoneNumber, setErrors} = useFormStore();
  const currentStep = STEPS.find(s => s.id === step) || STEPS[0];
  
  const validateStep = (): boolean => {
    if(step === 1) {
      const newErrors: { [key: string]: boolean } = {
        name: !name,
        email: !email,
        phoneNumber: !phoneNumber,
      };
      setErrors(newErrors);
      return !Object.values(newErrors).some(hasError => hasError);
    }
    return true;
  };

  const handleNextStep = () => validateStep() && nextStep();
  
  return (
    <MainLayout>
      <StepsLayout>
          <FormLayout>
            <FormHeader title={currentStep.title} description={currentStep.description} />
            {step === 1 && <PersonalStep />}
            {step === 2 && <PlanStep />}
            {step === 3 && <AddOnsStep />}
          </FormLayout>
      </StepsLayout>
      <FooterLayout>
        {step > 1 ? (
          <Button type={ButtonType.Back} onClick={prevStep}>Go Back</Button>
        ) : (<div />)}
        {step < 4 && (
          <Button type={ButtonType.Forward} onClick={handleNextStep}>Next Step</Button>
          )}
      </FooterLayout>
    </MainLayout>
  );
}
