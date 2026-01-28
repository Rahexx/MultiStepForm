import { email } from "zod";
import LabeledInput from "../Form/LabeledInput";
import PersonalLayout from "../Layout/PersonalLayout";
import { useFormStore } from "@/store/useFormStore";

function PersonalStep() {
    const {name, email, phoneNumber, setName, setEmail, setPhoneNumber, errors} = useFormStore();
    
    return (
        <PersonalLayout>
            <LabeledInput type="text" label="Name" value={name} onBlur={(e) => setName(e.target.value)} hasError={errors.name} placeholder="e.g. Stephen King" />
            <LabeledInput type="email" label="Email Address" value={email} onBlur={(e) => setEmail(e.target.value)} hasError={errors.email} placeholder="e.g. stephenking@lorem.com" />
            <LabeledInput type="tel" label="Phone Number" value={phoneNumber} onBlur={(e) => setPhoneNumber(e.target.value)} hasError={errors.phoneNumber} placeholder="e.g. +1 234 567 890" />
        </PersonalLayout>
    )
}

export default PersonalStep;