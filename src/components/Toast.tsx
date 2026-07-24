import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, TriangleAlert } from 'lucide-react'

type ToastTone = 'success' | 'error'

interface ToastContextValue {
  showToast: (message: string, tone?: ToastTone) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within <ToastProvider>')
  return ctx
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ message: string; tone: ToastTone } | null>(null)
  const timer = useRef<number | undefined>(undefined)

  const showToast = useCallback((msg: string, tone: ToastTone = 'success') => {
    window.clearTimeout(timer.current)
    setToast({ message: msg, tone })
    timer.current = window.setTimeout(() => setToast(null), tone === 'error' ? 3600 : 2200)
  }, [])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
      >
        <AnimatePresence>
          {toast && (
            <motion.div
              role={toast.tone === 'error' ? 'alert' : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-sm text-paper shadow-lg"
            >
              {toast.tone === 'error' ? (
                <TriangleAlert size={15} strokeWidth={2.5} className="text-gold" />
              ) : (
                <Check size={15} strokeWidth={2.5} className="text-gold" />
              )}
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
