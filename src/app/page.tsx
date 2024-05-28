import AccordionMenuWithAccessibility from "@/components/accordion/AccordionMenuWithAccessibility";
import AccordionMenuWithoutAccessibility from "@/components/accordion/AccordionMenuWithoutAccessibility";
import CheckboxAccessible from "@/components/checkbox/CheckboxAccessible";
import CheckboxNotAccessible from "@/components/checkbox/CheckboxNotAccessible";
import AccessibleModal from "@/components/dialog/AccessibleModal";
import NonAccessibleModal from "@/components/dialog/NonAccessibleModal";
import RadioButtonGroupAccessible from "@/components/radio/RadioButtonGroupAccessible";
import RadioButtonGroupNotAccessible from "@/components/radio/RadioButtonGroupNotAccessible";

export default function Home() {
  return (
    <main>
      <NonAccessibleModal />
      <AccessibleModal />
      <AccordionMenuWithAccessibility />
      <AccordionMenuWithoutAccessibility />
      <CheckboxNotAccessible />
      <CheckboxAccessible />
      <RadioButtonGroupAccessible />
      <RadioButtonGroupNotAccessible />
    </main>
  );
}
