import ContactForm from "@/components/Custom/ContactForm";
import Title from "@/components/Custom/Title";

const ContactPage = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 w-screen h-screen">
            <Title title="Contact" />
            <ContactForm />
        </div>
    )
}

export default ContactPage;