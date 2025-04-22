
import { useState, FormEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Simulate form submission
    // In a real implementation, this would be replaced with an actual form submission
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-ink-black font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burnt-orange"
          aria-describedby={submitStatus === 'error' ? 'form-error' : undefined}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-ink-black font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burnt-orange"
          aria-describedby={submitStatus === 'error' ? 'form-error' : undefined}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-ink-black font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burnt-orange"
          aria-describedby={submitStatus === 'error' ? 'form-error' : undefined}
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      
      {submitStatus === 'success' && (
        <p className="text-green-600 font-medium" role="alert">
          Thank you! Your message has been sent successfully.
        </p>
      )}
      
      {submitStatus === 'error' && (
        <p id="form-error" className="text-red-600 font-medium" role="alert">
          There was an error sending your message. Please try again.
        </p>
      )}
      
      <p className="text-xs text-gray-500">
        This site is protected by reCAPTCHA v3 and the Google
        <a href="https://policies.google.com/privacy" className="text-burnt-orange hover:underline" target="_blank" rel="noopener noreferrer"> Privacy Policy</a> and
        <a href="https://policies.google.com/terms" className="text-burnt-orange hover:underline" target="_blank" rel="noopener noreferrer"> Terms of Service</a> apply.
      </p>
    </form>
  );
};

export default ContactForm;
