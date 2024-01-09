import ContactForm from "@/components/ContactForm";
import Title from "@/components/Title";

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center gap-10 w-screen h-screen bg-slate-200">
            <Title title="Contact" />
            <ContactForm />
        </div>
    )
}