import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Users, Mail, User, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  interest: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  interest?: string;
}

const JoinTeamForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    interest: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.interest.trim()) {
      newErrors.interest = 'Please specify your area of interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateTimestamp = (): string => {
    const now = new Date();
    return now.toLocaleString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }) + ' IST';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_87zho8q',
        'template_llg4s6z', // Correct template ID for join team
        {
          name: formData.name,
          email: formData.email,
          message: `Join Team Request\n\nArea of Interest: ${formData.interest}`,
          time: generateTimestamp()
        },
        '_lXoQZlv61yu4rwTm'
      );

      if (result.status === 200) {
        toast.success('Join request submitted successfully! We\'ll get back to you soon.');
        
        // Reset form
        setFormData({ name: '', email: '', interest: '' });
        setErrors({});
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error: unknown) {
      console.error('EmailJS error:', error);
      
      // More specific error messages
      if (error && typeof error === 'object' && 'status' in error) {
        const errorWithStatus = error as { status: number; text?: string };
        console.error('EmailJS error details:', {
          status: errorWithStatus.status,
          text: errorWithStatus.text,
          formData: formData
        });
        
        if (errorWithStatus.status === 400) {
          toast.error('Invalid form data. Please check your inputs and try again.');
        } else if (errorWithStatus.status === 401) {
          toast.error('Authentication failed. Please contact support.');
        } else if (errorWithStatus.text?.includes('template')) {
          toast.error('Email template not found. Please contact support.');
        } else {
          toast.error(`Failed to submit join request. Error: ${errorWithStatus.status}`);
        }
      } else {
        console.error('Unknown error type:', error);
        toast.error('Failed to submit join request. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ready to be part of something amazing? Tell us about yourself and let's build the future together.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Area of Interest
              </label>
              <textarea
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none ${
                  errors.interest ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="Tell us about your skills, interests, and what role you'd like to play in our team..."
              />
              {errors.interest && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.interest}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Join Our Team
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            By submitting this form, you agree to be contacted regarding opportunities with our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinTeamForm;