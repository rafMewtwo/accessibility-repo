import AccordionMenuWithAccessibility from "@/components/accordion/AccordionMenuWithAccessibility";
import AccordionMenuWithoutAccessibility from "@/components/accordion/AccordionMenuWithoutAccessibility";
import CheckboxAccessible from "@/components/checkbox/CheckboxAccessible";
import CheckboxNotAccessible from "@/components/checkbox/CheckboxNotAccessible";
import AccessibleModal from "@/components/dialog/AccessibleModal";
import NonAccessibleModal from "@/components/dialog/NonAccessibleModal";

export default function Home() {
  return (
    <main>
      <NonAccessibleModal />
      <AccessibleModal />
      <AccordionMenuWithAccessibility />
      <AccordionMenuWithoutAccessibility />
      <CheckboxNotAccessible />
      <CheckboxAccessible />
    </main>
  );
}
