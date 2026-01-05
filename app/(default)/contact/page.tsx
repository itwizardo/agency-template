'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

// Turnstile types
declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'expired-callback': () => void;
      }) => void;
    };
  }
}

// Turnstile site key (set in env, optional)
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

export default function Contact() {
  const { locale } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<HTMLDivElement>(null);

  // Load Turnstile script if site key is configured
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || typeof window === 'undefined') return;

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(''),
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const content = {
    nl: {
      title: "Contact",
      subtitle: "Neem contact met ons op",
      intro: "Heeft u een vraag of wilt u een project bespreken? Vul het formulier in of neem direct contact met ons op.",
      form: {
        name: "Naam",
        email: "E-mailadres",
        phone: "Telefoonnummer",
        whatsapp: "WhatsApp nummer",
        whatsappPlaceholder: "+31 6 12345678",
        message: "Uw bericht",
        submit: "Verstuur bericht",
        sending: "Versturen...",
        success: "Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.",
        error: "Er is iets misgegaan. Probeer het later opnieuw.",
        invalidName: "Voer een geldige naam in (minimaal 2 tekens)",
        invalidEmail: "Voer een geldig e-mailadres in",
        invalidPhone: "Voer een geldig telefoonnummer in",
        invalidMessage: "Uw bericht moet minimaal 10 tekens bevatten",
        turnstileRequired: "Voltooi de beveiligingscontrole",
      },
      info: {
        title: "Contactgegevens",
        email: "info@gwcwebdesign.com",
        phone: "+31 (0)20 722 3654",
        address: "WeWork Weteringschans\nWeteringschans 165\n1017 XD Amsterdam",
        hours: "Ma - Vr: 09:00 - 17:30",
        phoneLabel: "Telefoon",
        addressLabel: "Adres",
        hoursLabel: "Openingstijden",
      },
    },
    en: {
      title: "Contact",
      subtitle: "Get in touch with us",
      intro: "Have a question or want to discuss a project? Fill out the form or contact us directly.",
      form: {
        name: "Name",
        email: "Email address",
        phone: "Phone number",
        whatsapp: "WhatsApp number",
        whatsappPlaceholder: "+31 6 12345678",
        message: "Your message",
        submit: "Send message",
        sending: "Sending...",
        success: "Thank you for your message! We will contact you as soon as possible.",
        error: "Something went wrong. Please try again later.",
        invalidName: "Please enter a valid name (at least 2 characters)",
        invalidEmail: "Please enter a valid email address",
        invalidPhone: "Please enter a valid phone number",
        invalidMessage: "Your message must be at least 10 characters",
        turnstileRequired: "Please complete the security check",
      },
      info: {
        title: "Contact Information",
        email: "info@gwcwebdesign.com",
        phone: "+31 (0)20 722 3654",
        address: "WeWork Weteringschans\nWeteringschans 165\n1017 XD Amsterdam",
        hours: "Mon - Fri: 09:00 - 17:30",
        phoneLabel: "Phone",
        addressLabel: "Address",
        hoursLabel: "Opening Hours",
      },
    },
    de: {
      title: "Kontakt",
      subtitle: "Kontaktieren Sie uns",
      intro: "Haben Sie eine Frage oder möchten Sie ein Projekt besprechen? Füllen Sie das Formular aus oder kontaktieren Sie uns direkt.",
      form: {
        name: "Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        whatsapp: "WhatsApp Nummer",
        whatsappPlaceholder: "+31 6 12345678",
        message: "Ihre Nachricht",
        submit: "Nachricht senden",
        sending: "Senden...",
        success: "Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.",
        error: "Etwas ist schief gelaufen. Bitte versuchen Sie es später erneut.",
        invalidName: "Bitte geben Sie einen gültigen Namen ein (mindestens 2 Zeichen)",
        invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
        invalidPhone: "Bitte geben Sie eine gültige Telefonnummer ein",
        invalidMessage: "Ihre Nachricht muss mindestens 10 Zeichen enthalten",
        turnstileRequired: "Bitte führen Sie die Sicherheitsüberprüfung durch",
      },
      info: {
        title: "Kontaktinformationen",
        email: "info@gwcwebdesign.com",
        phone: "+31 (0)20 722 3654",
        address: "WeWork Weteringschans\nWeteringschans 165\n1017 XD Amsterdam",
        hours: "Mo - Fr: 09:00 - 17:30",
        phoneLabel: "Telefon",
        addressLabel: "Adresse",
        hoursLabel: "Öffnungszeiten",
      },
    },
    fr: {
      title: "Contact",
      subtitle: "Contactez-nous",
      intro: "Vous avez une question ou souhaitez discuter d'un projet ? Remplissez le formulaire ou contactez-nous directement.",
      form: {
        name: "Nom",
        email: "Adresse e-mail",
        phone: "Numéro de téléphone",
        whatsapp: "Numéro WhatsApp",
        whatsappPlaceholder: "+31 6 12345678",
        message: "Votre message",
        submit: "Envoyer le message",
        sending: "Envoi...",
        success: "Merci pour votre message ! Nous vous contacterons dans les plus brefs délais.",
        error: "Une erreur s'est produite. Veuillez réessayer plus tard.",
        invalidName: "Veuillez entrer un nom valide (au moins 2 caractères)",
        invalidEmail: "Veuillez entrer une adresse e-mail valide",
        invalidPhone: "Veuillez entrer un numéro de téléphone valide",
        invalidMessage: "Votre message doit contenir au moins 10 caractères",
        turnstileRequired: "Veuillez compléter la vérification de sécurité",
      },
      info: {
        title: "Coordonnées",
        email: "info@gwcwebdesign.com",
        phone: "+31 (0)20 722 3654",
        address: "WeWork Weteringschans\nWeteringschans 165\n1017 XD Amsterdam",
        hours: "Lun - Ven: 09:00 - 17:30",
        phoneLabel: "Téléphone",
        addressLabel: "Adresse",
        hoursLabel: "Heures d'ouverture",
      },
    },
    es: {
      title: "Contacto",
      subtitle: "Póngase en contacto con nosotros",
      intro: "¿Tiene alguna pregunta o desea discutir un proyecto? Complete el formulario o contáctenos directamente.",
      form: {
        name: "Nombre",
        email: "Dirección de correo electrónico",
        phone: "Número de teléfono",
        whatsapp: "Número de WhatsApp",
        whatsappPlaceholder: "+31 6 12345678",
        message: "Su mensaje",
        submit: "Enviar mensaje",
        sending: "Enviando...",
        success: "¡Gracias por su mensaje! Nos pondremos en contacto con usted lo antes posible.",
        error: "Algo salió mal. Por favor, inténtelo de nuevo más tarde.",
        invalidName: "Por favor, introduzca un nombre válido (al menos 2 caracteres)",
        invalidEmail: "Por favor, introduzca una dirección de correo electrónico válida",
        invalidPhone: "Por favor, introduzca un número de teléfono válido",
        invalidMessage: "Su mensaje debe tener al menos 10 caracteres",
        turnstileRequired: "Por favor, complete la verificación de seguridad",
      },
      info: {
        title: "Información de contacto",
        email: "info@gwcwebdesign.com",
        phone: "+31 (0)20 722 3654",
        address: "WeWork Weteringschans\nWeteringschans 165\n1017 XD Amsterdam",
        hours: "Lun - Vie: 09:00 - 17:30",
        phoneLabel: "Teléfono",
        addressLabel: "Dirección",
        hoursLabel: "Horario de atención",
      },
    },
  };

  const t = content[locale];

  // Validation helpers
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone: string) => {
    // Allow empty (optional field) or valid phone format
    if (!phone) return true;
    const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): string | null => {
    // Name validation (min 2 chars)
    if (formData.name.trim().length < 2) {
      return t.form.invalidName;
    }

    // Email validation
    if (!isValidEmail(formData.email)) {
      return t.form.invalidEmail;
    }

    // Phone validation (optional but if provided must be valid)
    if (formData.phone && !isValidPhone(formData.phone)) {
      return t.form.invalidPhone;
    }

    // WhatsApp validation (required, must be valid phone)
    if (!isValidPhone(formData.whatsapp) || formData.whatsapp.trim().length < 7) {
      return t.form.invalidPhone;
    }

    // Message validation (min 10 chars)
    if (formData.message.trim().length < 10) {
      return t.form.invalidMessage;
    }

    // Turnstile validation (if configured)
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      return t.form.turnstileRequired;
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Client-side validation
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          turnstileToken: turnstileToken || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send');
      }

      setSubmitted(true);
    } catch (err) {
      setError(t.form.error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-300 text-center">{t.intro}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-8 text-center backdrop-blur-sm">
                  <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-green-300 text-lg">{t.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        {t.form.name} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        {t.form.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        {t.form.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">
                        {t.form.whatsapp} *
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        required
                        placeholder={t.form.whatsappPlaceholder}
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      {t.form.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 resize-none"
                    />
                  </div>
                  {/* Turnstile Widget (if configured) */}
                  {TURNSTILE_SITE_KEY && (
                    <div className="mb-6">
                      <div ref={turnstileRef} className="flex justify-center" />
                    </div>
                  )}
                  {error && (
                    <div className="mb-6 p-4 bg-red-900/30 border border-red-500/30 rounded-lg text-red-300">
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? t.form.sending : t.form.submit}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-gray-900 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">{t.info.title}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <a href={`mailto:${t.info.email}`} className="hover:text-blue-400">{t.info.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{t.info.phoneLabel}</p>
                      <a href={`tel:${t.info.phone.replace(/\s/g, '')}`} className="hover:text-blue-400">{t.info.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{t.info.addressLabel}</p>
                      <p className="whitespace-pre-line">{t.info.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{t.info.hoursLabel}</p>
                      <p>{t.info.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
