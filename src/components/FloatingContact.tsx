'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, X, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '212700547163';
const EMAIL = 'jaddaouiayoub02@gmail.com';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Bonjour, je souhaite démarrer un projet avec Jaddaoui Elevate."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <>
            {/* WhatsApp pill */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 40, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.05 }}
              className="flex items-center gap-3 rounded-full px-5 py-3 text-sm font-bold text-white shadow-xl shadow-green-500/30 hover:scale-105 active:scale-95 transition-transform"
              style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
              aria-label="Contacter sur WhatsApp"
            >
              {/* WhatsApp SVG icon */}
              <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.83.739 5.48 2.03 7.79L0 32l8.43-2.01A15.94 15.94 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.29 13.29 0 01-6.79-1.85l-.487-.29-5.007 1.196 1.221-4.872-.317-.5A13.261 13.261 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.363 0 13.333 5.97 13.333 13.333S23.363 29.333 16 29.333zm7.286-9.952c-.397-.198-2.35-1.161-2.715-1.292-.364-.133-.63-.198-.896.198-.265.397-1.028 1.292-1.26 1.558-.232.265-.463.298-.86.1-.397-.198-1.676-.617-3.192-1.972-1.179-1.053-1.978-2.352-2.21-2.749-.232-.397-.024-.612.174-.81.178-.178.397-.463.596-.695a2.7 2.7 0 00.397-.663.73.73 0 00-.033-.695c-.1-.198-.895-2.162-1.228-2.958-.32-.777-.648-.672-.895-.684l-.763-.013c-.265 0-.695.1-1.06.496-.364.397-1.393 1.36-1.393 3.32 0 1.96 1.427 3.853 1.625 4.118.198.265 2.808 4.287 6.806 6.013.952.412 1.694.658 2.272.841.954.304 1.823.261 2.51.158.765-.114 2.35-.96 2.682-1.888.33-.927.33-1.722.232-1.888-.099-.165-.364-.265-.762-.463z"/>
              </svg>
              WhatsApp
            </motion.a>

            {/* Email pill */}
            <motion.a
              href={`mailto:${EMAIL}`}
              initial={{ opacity: 0, x: 40, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="flex items-center gap-3 rounded-full px-5 py-3 text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-transform"
              style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }}
              aria-label={`Envoyer un email à ${EMAIL}`}
            >
              <Mail size={18} />
              Email
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-accent/40 text-white relative overflow-hidden"
        style={{
          background: open
            ? 'linear-gradient(135deg, #64748b 0%, #334155 100%)'
            : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        }}
        aria-label={open ? 'Fermer le contact' : 'Nous contacter'}
      >
        {/* Pulse ring when closed */}
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full bg-blue-400/60"
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Phone size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
