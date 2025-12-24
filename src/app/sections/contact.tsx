'use client';

import * as React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';

const contactDetails = [
  { icon: Mail, text: "alizaib.shahid@icloud.com", href: "mailto:alizaib.shahid@icloud.com" },
  { icon: Mail, text: "alizaibshahid@gmail.com", href: "mailto:alizaibshahid@gmail.com" },
  { icon: Mail, text: "azgraphix.uk@proton.me", href: "mailto:azgraphix.uk@proton.me" },
  { icon: Phone, text: "+92 301 2828009", href: "tel:+923012828009" },
  { icon: MapPin, text: "Saima Luxury homes, Karachi, Pakistan", href: "#" },
  { icon: Instagram, text: "AZGraphix.uk", href: "https://www.instagram.com/azgraphix.uk/" },
  { icon: Instagram, text: "Alizaibshahid_official", href: "https://www.instagram.com/alizaibshahid_official/" },
  { icon: Facebook, text: "AZGraphix.uk", href: "https://www.facebook.com/azgraphix.uk" },
  { icon: Facebook, text: "Alizaibshahofficial", href: "https://www.facebook.com/alizaibshahofficial" },

];

export function ContactSection() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "01857a73-4a58-4d62-89ba-6471bdd4fe2b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
        <p className="text-center text-slate-300 max-w-2xl mx-auto mb-12">
            Have a project in mind? I'd love to hear from you. Let's create something amazing together.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/[.08] backdrop-blur-[12px] border border-white/[.1] rounded-2xl p-8">
            <h3 className="font-headline text-2xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name" 
                className="bg-white/10 backdrop-blur-sm border-white/20 h-12 rounded-lg focus:ring-accent focus:border-accent"
                required
              />
              <Input 
                type="email"
                name="email"
                placeholder="Your Email" 
                className="bg-white/10 backdrop-blur-sm border-white/20 h-12 rounded-lg focus:ring-accent focus:border-accent"
                required
              />
              <Textarea 
                name="message"
                placeholder="Your Message" 
                className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg min-h-[120px] focus:ring-accent focus:border-accent"
                required
              />
              <Button 
                type="submit"
                size="lg" 
                className="w-full rounded-full font-bold text-base bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
            {result && <span className="mt-4 text-center block text-slate-300">{result}</span>}
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            {contactDetails.map((item, index) => (
              <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
