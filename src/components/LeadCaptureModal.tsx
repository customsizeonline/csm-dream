import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface LeadCaptureModalProps {
  children: React.ReactNode;
  variant?: "modal" | "inline";
}

export const LeadCaptureModal = ({ children, variant = "modal" }: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mattressType: ""
  });
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Quote Request Submitted!",
      description: "We'll send your custom mattress quote within 24 hours.",
    });
    
    setIsOpen(false);
    setFormData({ name: "", email: "", mattressType: "" });
  };

  const LeadForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          placeholder="Enter your name"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="Enter your email"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="mattressType">Mattress Type</Label>
        <Select value={formData.mattressType} onValueChange={(value) => setFormData(prev => ({ ...prev, mattressType: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="Select your mattress type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rv">RV Mattress</SelectItem>
            <SelectItem value="boat">Boat Mattress</SelectItem>
            <SelectItem value="tiny-home">Tiny Home</SelectItem>
            <SelectItem value="custom">Custom Dimensions</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90" size="lg">
        Get My Custom Quote
      </Button>
    </form>
  );

  if (variant === "inline") {
    return (
      <div className="max-w-md mx-auto">
        <LeadForm />
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Get Your Custom Quote</DialogTitle>
        </DialogHeader>
        <LeadForm />
      </DialogContent>
    </Dialog>
  );
};