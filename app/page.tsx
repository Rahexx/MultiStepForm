"use client";
import Button, { ButtonType } from "@/components/Form/Button";
import FormHeader from "@/components/Form/FormHeader";
import LabeledInput from "@/components/Form/LabeledInput";
import PlanList from "@/components/Form/PlanList";
import PlanOption from "@/components/Form/PlanOption";
import FooterLayout from "@/components/Layout/FooterLayout";
import FormLayout from "@/components/Layout/FormLayout";
import MainLayout from "@/components/Layout/MainLayout";
import PersonalLayout from "@/components/Layout/PersonalLayout";
import PlanLayout from "@/components/Layout/PlanLayout";
import StepsLayout from "@/components/Layout/StepsLayout";
import { STEPS } from "@/config/steps.config";
import { useFormStore } from "@/store/useFormStore";
import { useStepsStore } from "@/store/useStepsStore";

export default function Home() {
  const {step, nextStep, prevStep} = useStepsStore();
  const {name, email, phoneNumber, setName, setEmail, setPhoneNumber, errors, setErrors} = useFormStore();
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

  const handleNextStep = () => {
    if(validateStep()) nextStep();
  };
  
  return (
    <MainLayout>
      <StepsLayout>
          <FormLayout>
            <FormHeader title={currentStep.title} description={currentStep.description} />
            {step === 1 && (
              <PersonalLayout>
                <LabeledInput type="text" label="Name" value={name} onBlur={(e) => setName(e.target.value)} hasError={errors.name} placeholder="e.g. Stephen King" />
                <LabeledInput type="email" label="Email Address" value={email} onBlur={(e) => setEmail(e.target.value)} hasError={errors.email} placeholder="e.g. stephenking@lorem.com" />
                <LabeledInput type="tel" label="Phone Number" value={phoneNumber} onBlur={(e) => setPhoneNumber(e.target.value)} hasError={errors.phoneNumber} placeholder="e.g. +1 234 567 890" />
              </PersonalLayout>
            )}
            {step === 2 && (
              <PlanLayout>
                <PlanList>
                  <PlanOption 
                    icon="icon-arcade.svg" 
                    optionName="Arcade" 
                    isActive={false} 
                    isYearlyCharge={false} 
                    monthlyCharge={9} 
                    yearlyCharge={90} 
                  />
                  <PlanOption 
                    icon="icon-advanced.svg" 
                    optionName="Advanced" 
                    isActive={false} 
                    isYearlyCharge={false} 
                    monthlyCharge={12} 
                    yearlyCharge={120} 
                  />
                  <PlanOption 
                    icon="icon-pro.svg" 
                    optionName="Pro" 
                    isActive={false} 
                    isYearlyCharge={false} 
                    monthlyCharge={15} 
                    yearlyCharge={150} 
                  />
                </PlanList>
              </PlanLayout>
            )}
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
