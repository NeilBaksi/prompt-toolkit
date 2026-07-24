import { useCallback, useEffect, useRef, useState } from 'react'
import { copyText } from '../lib/copy'
import { useToast } from '../components/Toast'

/**
 * Per-button copy state. Copies `text`, fires the global toast, and flips a
 * local `copied` flag for ~2.2s so the button can show confirmation.
 */
export function useCopy() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  const { showToast } = useToast()

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = useCallback(
    async (text: string) => {
      const ok = await copyText(text)
      if (!ok) {
        showToast('Couldn’t copy — select the text and copy manually', 'error')
        return
      }
      setCopied(true)
      showToast('Copied — paste into Claude, ChatGPT or Gemini')
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2200)
    },
    [showToast],
  )

  return { copied, copy }
}
