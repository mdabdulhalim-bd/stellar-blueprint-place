import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProcessSection />
      <TechStackSection />
      <FAQSection />
    </div>
  );
};

export default Index;
