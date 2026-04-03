'use client'
import { Heading, Paragraph, Underline } from '@components'
import { useTranslate } from '@hooks'
import { DictionaryKeys } from '@types'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// TODO: Replace with your Formspree form ID
const FORMSPREE_ID = 'mnjogqda'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export const Pricing = () => {
  const t = useTranslate()
  const [isFormVisible, setIsFormVisible] = useState(false)
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="flex flex-col items-center max-w-screen-xl gap-3 mb-10 w-full px-8">
          <Heading className="text-slate-800 text-center" level={2}>
            {t('index.pricing.title')}
          </Heading>
          <Paragraph className="text-slate-700 max-w-md">
            {t('index.pricing.description')}
          </Paragraph>
          <Underline />
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          {[1, 2].map(nb => (
            <PriceColumn key={nb} col={nb} onBook={() => setIsFormVisible(true)} />
          ))}
        </div>
      </div>
      <BookingModal isVisible={isFormVisible} setVisible={setIsFormVisible} />
    </section>
  )
}

const PriceColumn = ({ col, onBook }: { col: number; onBook: VoidFunction }) => {
  const t = useTranslate()
  return (
    <div
      className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow xl:p-8"
      style={{ minWidth: '285px' }}
    >
      <Heading className="text-slate-800 text-center" level={3}>
        {t(`index.pricing.${col}.title` as DictionaryKeys)}
      </Heading>
      <Paragraph className="text-slate-700 text-center max-w-md">
        {t(`index.pricing.${col}.description` as DictionaryKeys)}
      </Paragraph>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-3xl font-extrabold">
          {t(`index.pricing.${col}.price` as DictionaryKeys)}
          <i className="text-slate-600 font-normal text-xs pl-1">(HTVA)</i>
        </span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left grow">
        {[1, 2, 3, 4, 5].map(nb => (
          <ListItem key={nb} col={col} item={nb} />
        ))}
      </ul>
      <button
        onClick={onBook}
        className="text-md px-6 py-3 cursor-pointer rounded-lg text-white font-bold"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        {t('index.pricing.cta')}
      </button>
    </div>
  )
}

const ListItem = ({ col, item }: { col: number; item: number }) => {
  const t = useTranslate()
  const text = t(`index.pricing.${col}.${item}` as DictionaryKeys)
  if (!text) return null
  return (
    <li className="flex items-center space-x-3">
      <svg
        className="flex-shrink-0 w-5 h-5 text-green-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span>{text}</span>
    </li>
  )
}

type BookingModalProps = {
  setVisible: (visible: boolean) => void
  isVisible: boolean
}

const BookingModal = ({ isVisible, setVisible }: BookingModalProps) => {
  const t = useTranslate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg(null)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          preferred_date: date,
          preferred_time: time,
        }),
      })

      if (!response.ok) throw new Error('Submission failed')

      setStatus('success')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setDate('')
      setTime('')
    } catch {
      setStatus('error')
      setErrorMsg(t('index.booking.error'))
    }
  }

  const close = () => {
    if (status === 'submitting') return
    setVisible(false)
  }

  const inputClass =
    'w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 placeholder-gray-400'

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="bg-white rounded-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <h2 className="text-xl font-bold text-slate-800 mb-6">
              {t('index.booking.title')}
            </h2>

            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-slate-700">{t('index.booking.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder={t('index.booking.name.placeholder')}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder={t('index.booking.email.placeholder')}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={inputClass}
                />
                <input
                  type="tel"
                  placeholder={t('index.booking.phone.placeholder')}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className={inputClass}
                />
                <textarea
                  placeholder={t('index.booking.message.placeholder')}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={3}
                  className={`${inputClass} resize-none`}
                />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      {t('index.booking.date')}
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      {t('index.booking.time')}
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={e => setTime(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                {status === 'error' && errorMsg && (
                  <p className="text-red-500 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-2 px-6 py-3 rounded-lg text-white font-bold disabled:opacity-60 cursor-pointer"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {status === 'submitting'
                    ? t('index.booking.submitting')
                    : t('index.booking.submit')}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
