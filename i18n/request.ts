import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'nl', 'es', 'fr', 'de'] as const
export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  nl: 'Nederlands',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
}

export const defaultLocale: Locale = 'en'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = (requested && locales.includes(requested as Locale))
    ? requested
    : defaultLocale

  return {
    locale: locale as string,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
